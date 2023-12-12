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

const getUserByIdUtil = async (userId) => {
  try {
    const user = await userModel.findById(userId);
    return user;
  } catch (err) {
    console.log(
      `Something went wrong while getting user. Error: ${err.message}`
    );
    throw err;
  }
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

const doesUserExist = async (req, res, next) => {
  const { userId } = req.params;
  if (!userId) {
    return res.status(400).json({
      message: "userId is missing in path parameter",
    });
  }
  try {
    const doesExist = await userModel.exists({ _id: userId });
    if (doesExist) next();
    else {
      return res.status(404).json({
        message: "User dosen't exist.",
      });
    }
  } catch (err) {
    console.log(
      `Something went wrong while checking userExist. Error: ${err.message}`
    );
    return res.status(500).json({
      message: "Something went wrong while checking userExist",
      error: err.message,
    });
  }
};

const deleteUserByIdUtil = async (userId) => {
  try {
    const deleteReturn = await userModel.deleteOne({ _id: userId });
    console.log(`Deleted user: ${userId}. Result: ${deleteReturn}`);
  } catch (err) {
    console.log(
      `Something went wrong while deleting User. Error: ${err.message}`
    );
    throw err;
  }
};

const updateUserByIdUtil = async (userId, updatedData) => {
  try {
    const result = await userModel.findByIdAndUpdate(
      { _id: userId },
      { $set: updatedData },
      {
        new: true,
      }
    );
    return result;
  } catch (err) {
    console.log(
      `Something went wrong while updating User. Error: ${err.message}`
    );
    throw err;
  }
};

export {
  validateUserFields,
  saveUserInDB,
  getUserByIdUtil,
  doesUserExist,
  deleteUserByIdUtil,
  updateUserByIdUtil,
};
