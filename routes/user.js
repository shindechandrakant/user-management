import { Router } from "express";
import {
  createUser,
  deleteUserById,
  getListOfUser,
  getUserById,
  updateUserById,
} from "../controllers/user.js";
import { validateUserFields, doesUserExist } from "../utils/user.js";
const userRoute = Router();

userRoute.post("/user", validateUserFields, createUser);
userRoute.get("/user", getListOfUser);
userRoute.get("/user/:userId", doesUserExist, getUserById);
userRoute.put("/user/:userId", doesUserExist, updateUserById);
userRoute.delete("/user/:userId", doesUserExist, deleteUserById);
export { userRoute };
