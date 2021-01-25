import {
  addUser,
  findUsers,
  updateUser,
  removeUser,
  validateUser,
} from "../services/users.js";
import { generateToken } from "../helpers/generateToken.js";
import { sendMail } from "../helpers/nodemailler.js";

export const createUser = async (req, res, next) => {
  const { email, name, password } = req.body;
  try {
    let newUser = await addUser({
      email,
      name,
      membershipId: "5fe9e39a19b74f40d8a2396a",
      password,
    });
    res.json({ newUser });
  } catch (error) {
    res.send({ error });
  }
};

export const getUsers = async (req, res, next) => {
  const { ids } = req.body;
  try {
    let users = await findUsers(ids);
    res.send(users);
  } catch (error) {
    next(error);
  }
};

export const editUser = async (req, res, next) => {
  try {
    let user = await updateUser(req.body);
    res.send(user);
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  let { ids } = req.body;
  try {
    let user = await removeUser(ids);
    res.send(user);
  } catch (error) {
    next(error);
  }
};

export const logInUser = async (req, res, next) => {
  let { email, password } = req.body;
  try {
    let user = await validateUser({ email, password });
    let token = generateToken(user.toJSON());
    delete user.password;
    res.set("x-auth-token", token).send(user);
  } catch (error) {
    res.send({ error: "Invalid credentials." });
    next(error);
  }
};

export const sendDifferentBrowserMail = async (req, res, next) => {
  let { browser, os, ip, time, email } = req.body;
  try {
    sendMail(
      email,
      "Different Browser",
      `From ${browser} on ${os} with ${ip} in ${time}`
    );
    res.send("Mail send");
  } catch (error) {
    next(error);
  }
};
