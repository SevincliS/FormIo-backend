import { Form } from "../models/forms.js";
import { findQuery, removeQuery } from "../helpers/queries.js";
import { sendMail } from "../helpers/nodemailler.js";

export const addForm = async (form) => {
  return new Promise((resolve, reject) => {
    const newForm = new Form(form);
    newForm.save(function (err) {
      if (err) {
        reject(err);
      }
      resolve(newForm);
    });
  });
};

export const addSubmission = async (userForm, fields) => {
  return new Promise(async (resolve, reject) => {
    try {
      let { _id } = userForm[0];
      let oldSubmissions = userForm[0].submissions;

      let newSubmissions = [];
      newSubmissions.push(...oldSubmissions);
      newSubmissions.push(fields);
      let newForm = Object.assign(...userForm, { submissions: newSubmissions });
      const form = await Form.findByIdAndUpdate(_id, newForm, {
        new: true,
      }).exec();

      //Notification Mail
      newForm.notificationEmails.map((emailToSend) => {
        sendMail(
          emailToSend,
          "Contact mail",
          `You have a new contact mail from: ${fields.name}\n\n
            Senders mail address is : ${fields.email} \n\n`
        );
      });
      resolve(form);
    } catch (err) {
      reject(err);
    }
  });
};

export const findForm = async (ids) => {
  return new Promise(async (resolve, reject) => {
    try {
      let query = findQuery(ids);
      const form = await Form.find(query).exec();
      resolve(form);
    } catch (err) {
      reject(err);
    }
  });
};

export const findFormByEndPoint = async (endPoint) => {
  return new Promise(async (resolve, reject) => {
    try {
      let query = { endPoint: endPoint };
      const form = await Form.find(query).exec();
      resolve(form);
    } catch (err) {
      reject(err);
    }
  });
};

export const updateForm = async (formToUpdate) => {
  return new Promise(async (resolve, reject) => {
    try {
      let { _id } = formToUpdate;
      const form = await Form.findByIdAndUpdate(_id, formToUpdate, {
        new: true,
      }).exec();
      resolve(form);
    } catch (err) {
      reject(err);
    }
  });
};

export const removeForm = async (ids) => {
  return new Promise(async (resolve, reject) => {
    try {
      let query = removeQuery(ids);
      let form = await Form.deleteMany(query).exec();
      resolve(form);
    } catch (err) {
      reject(err);
    }
  });
};
