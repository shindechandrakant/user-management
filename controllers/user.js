import { saveUserInDB } from "../utils/user.js";

const getUserById = (req, res) => {
  const { userId } = req.params;
  if (!userId) {
    return res.status(400).json({
      message: "userId is missing in path parameter",
    });
  }

  try {
    return res.status(200).json({
      name: "Get User By ID",
      userId,
    });
  } catch (err) {}
};

/**
 * - Register User (First Name, Last Name, Email, Phone)
- Get User by ID
- Update User (First Name, Last Name, Email, Phone)
- Delete/Disable User
- List All Users with filters (Filters: First Name, Last Name, Email, Phone)
 */
const createUser = async (req, res) => {
  // create user

  const { firstName, lastName, email, phone } = req.body;

  const newUser = {
    firstName,
    lastName,
    email,
    phone,
  };

  try {
    const savedUser = await saveUserInDB(newUser);
    console.log(`Inserted user: ${savedUser}`);
    return res.status(200).json({
      message: "User created successfully!",
      user: savedUser,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Something went wrong while Saving user",
      error: err.message,
    });
  }
};

const updateUserById = (req, res) => {
  // update User By Id
};

const deleteUserById = (req, res) => {
  // delete User By Id
};

const getListOfUser = (req, res) => {
  // list of Users
};

export {
  getUserById,
  updateUserById,
  createUser,
  deleteUserById,
  getListOfUser,
};
