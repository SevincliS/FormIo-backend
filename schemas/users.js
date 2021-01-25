import mongoose from "mongoose";

export const UserSchema = mongoose.Schema({
  membershipId: { type: mongoose.Types.ObjectId, required: true },
  membershipStartDate: { type: String, required: false },
  membershipEndDate: { type: String, required: false },
  membershipAutoRenew: { type: Boolean, required: false },
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  creditCards: { type: Array, required: false },
  bills: { type: Array, required: false },
  formIds: { type: Array, required: false },
  phoneNumber: { type: String, required: false },
  birthDate: { type: String, required: false },
  address: { type: String, required: false },
  saveActivityLogs: { type: Boolean, required: false },
  activities: { type: Array, required: false },
  newBrowserNotification: { type: Boolean, required: false },
  tickets: { type: Array, required: false },
});
