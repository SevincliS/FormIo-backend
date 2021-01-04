import mongoose from "mongoose";
import { MembershipSchema } from "../schemas/memberships.js";

export const Membership = mongoose.model("Memberships", MembershipSchema);
