import { Router } from "express";
import {
  createUser,
  deleteUserById,
  getListOfUser,
  getUserById,
  updateUserById,
} from "../controllers/user.js";
import { validateUserFields } from "../utils/user.js";
const userRoute = Router();

userRoute.post("/user", validateUserFields, createUser);
userRoute.get("/user", getListOfUser);
userRoute.get("/user/:userId", getUserById);
userRoute.put("/user/:userId", updateUserById);
userRoute.delete("/user/:userId", deleteUserById);
export { userRoute };
