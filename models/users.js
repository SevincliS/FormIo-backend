import mongoose from "mongoose";
import { UserSchema } from "../schemas/users.js";

export const User = mongoose.model("users", UserSchema);
