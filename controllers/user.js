const getUserById = (req, res) => {
  const { userId } = req.params;
  return res.status(200).json({
    name: "Get User By ID",
    userId,
  });
};

/**
 * - Register User (First Name, Last Name, Email, Phone)
- Get User by ID
- Update User (First Name, Last Name, Email, Phone)
- Delete/Disable User
- List All Users with filters (Filters: First Name, Last Name, Email, Phone)
 */
const createUser = (req, res) => {
  // create user;
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
