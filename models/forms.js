import mongoose from "mongoose";
import { FormSchema } from "../schemas/forms.js";

export const Form = mongoose.model("Forms", FormSchema);
