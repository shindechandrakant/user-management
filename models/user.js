import { client } from "../db/dbConnection.js";
import { Schema } from "mongoose";

const userSchema = new Schema({
  // (First Name, Last Name, Email, Phone)
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
});

const userModel = client.model("users", userSchema);

export { userModel };
