import { Router } from "express";
import {
  createUser,
  deleteUserById,
  getListOfUser,
  getUserById,
  updateUserById,
} from "../controllers/user";
const userRoute = Router();

userRoute.post("/user", createUser);
userRoute.get("/users", getListOfUser);
userRoute.get("/user/:userId", getUserById);
userRoute.put("/user/:userId", updateUserById);
userRoute.delete("/user/:userId", deleteUserById);
export { userRoute };
