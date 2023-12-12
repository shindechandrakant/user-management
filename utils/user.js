import { userModel } from "../models/user.js";

const validateUserFields = (req, res, next) => {
  let errors = [];
  const { firstName, lastName, email, phone } = req.body;

  if (!firstName) {
    errors.push({
      field: "firstName",
      message: "First name is missing",
    });
  }
  if (!lastName) {
    errors.push({
      field: "lastName",
      message: "Last name is missing",
    });
  }
  if (!email) {
    errors.push({
      field: "email",
      message: "Email is missing",
    });
  }
  if (!phone) {
    errors.push({
      field: "phone",
      message: "phone No is missing",
    });
  }

  if (errors.length) {
    return res.status(400).json({
      message: "Required fields are missing",
      fields: errors,
    });
  }
  next();
};

const saveUserInDB = async (newUser) => {
  try {
    const user = new userModel(newUser);
    await user.save();
    return user;
  } catch (err) {
    console.log(`Got error while saving user . Error: ${err.message}`);
    throw err;
  }
};

export { validateUserFields, saveUserInDB };
