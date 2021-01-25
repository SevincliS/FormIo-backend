import mongoose from "mongoose";

export const MembershipSchema = mongoose.Schema({
  name: { type: String, required: true },
  price: { type: String, required: true },
  properties: { type: Object, required: true },
  type: { type: String, required: true },
});
