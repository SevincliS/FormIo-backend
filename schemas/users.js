import mongoose from "mongoose";

export const UserSchema = mongoose.Schema({
  membershipId: { type: mongoose.Types.ObjectId, required: true },
  membershipStartDate: { type: String, required: false },
  membershipStartDate: { type: String, required: false },
  membershipAutoRenew: { type: Boolean, required: false },
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  creditCards: { type: Object, required: false },
  bills: { type: Object, required: false },
  formIds: { type: Object, required: false },
});
