import { User } from "../models/users.js";
import { findQuery, removeQuery } from "../helpers/queries.js";
import { hashPassword } from "../helpers/hashPassword.js";

export const addUser = async (user) => {
  return new Promise(async (resolve, reject) => {
    try {
      let [result] = await User.find({ email: user.email });
      if (result) {
        reject("Zaten bu email ile kayıtlı bir kullanıcı var.");
      } else {
        let hashedPassword = await hashPassword(user.password);
        const newUser = new User({
          ...user,
          password: hashedPassword,
        });
        newUser.save(function (err) {
          if (err) {
            reject(err);
          }
          resolve(newUser);
        });
      }
    } catch (err) {
      reject(err);
    }
  });
};

export const findUsers = async (ids) => {
  return new Promise(async (resolve, reject) => {
    try {
      let query = findQuery(ids);
      const users = await User.find(query).exec();
      resolve(users);
    } catch (err) {
      reject(err);
    }
  });
};

export const updateUser = async (userToUpdate) => {
  return new Promise(async (resolve, reject) => {
    try {
      let { _id } = userToUpdate;
      const user = await User.findByIdAndUpdate(_id, userToUpdate, {
        new: true,
      }).exec();
      resolve(user);
    } catch (err) {
      reject(err);
    }
  });
};

export const removeUser = async (ids) => {
  return new Promise(async (resolve, reject) => {
    try {
      let query = removeQuery(ids);
      let users = await User.deleteMany(query).exec();
      resolve(users);
    } catch (err) {
      reject(err);
    }
  });
};

export const validateUser = async ({ email, password }) => {
  return new Promise(async (resolve, reject) => {
    try {
      let [user] = await User.find({ email }).exec();
      let hashedPassword = await hashPassword(password);
      if (user && user.password === hashedPassword) {
        resolve(user);
      } else {
        reject("Invalid credentials");
      }
    } catch (err) {
      reject(err);
    }
  });
};
