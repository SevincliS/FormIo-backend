import mongoose from "mongoose";

export const FormSchema = mongoose.Schema({
  endPoint: { type: String, required: true },
  name: { type: String, required: true },
  premiumEndPoint: { type: String, required: false },
  fields: { type: Object, required: false },
  notificationEmails: { type: Array, required: false },
  haveCustomMail: { type: Boolean, required: false },
  haveAutoResponse: { type: Boolean, required: false },
  files: { type: Object, required: false },
  submissions: { type: Array, required: false },
});
