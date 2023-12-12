import {
  saveUserInDB,
  getUserByIdUtil,
  deleteUserByIdUtil,
} from "../utils/user.js";

const getUserById = async (req, res) => {
  const { userId } = req.params;
  if (!userId) {
    return res.status(400).json({
      message: "userId is missing in path parameter",
    });
  }

  try {
    const user = await getUserByIdUtil(userId);
    return res.status(200).json({
      message: "User found successfully.",
      user,
    });
  } catch (err) {
    return res.status(500).json({
      message: `Something went wrong while getting user by id: ${userId}`,
      error: err.message,
    });
  }
};

/**
 * - Register User (First Name, Last Name, Email, Phone) -> done
- Get User by ID -> done
- Update User (First Name, Last Name, Email, Phone)
- Delete/Disable User
- List All Users with filters (Filters: First Name, Last Name, Email, Phone)
 */
const createUser = async (req, res) => {
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
      message: "Something went wrong while creating user",
      error: err.message,
    });
  }
};

const updateUserById = (req, res) => {
  // update User By Id
};

const deleteUserById = async (req, res) => {
  const { userId } = req.params;
  if (!userId) {
    return res.status(400).json({
      message: "userId is missing in path parameter",
    });
  }

  try {
    await deleteUserByIdUtil(userId);
    return res.status(204).json({});
  } catch (err) {
    return res.status(500).json({
      message: `Something went wrong while getting user by id: ${userId}`,
      error: err.message,
    });
  }
};

const getListOfUser = (req, res) => {
  // list of Users
  return res.status(200).json({
    message: "get list of users",
  });
};

export {
  getUserById,
  updateUserById,
  createUser,
  deleteUserById,
  getListOfUser,
};
