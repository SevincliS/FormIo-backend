import express from "express";

import {
  createUser,
  getUsers,
  editUser,
  deleteUser,
  logInUser,
  sendDifferentBrowserMail,
} from "../controllers/users.js";

const { Router } = express;
const router = Router();

router.route("/createUser").post(createUser);
router.route("/get").get(getUsers);
router.route("/edit").post(editUser);
router.route("/delete").post(deleteUser);
router.route("/login").post(logInUser);
router.route("/sendDifferentBrowserMail").post(sendDifferentBrowserMail);

export default router;
