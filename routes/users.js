import express from "express";

import {
  createUser,
  getUsers,
  editUser,
  deleteUser,
  logInUser,
} from "../controllers/users.js";

const { Router } = express;
const router = Router();

router.route("/createUser").post(createUser);
router.route("/get").post(getUsers);
router.route("/edit").post(editUser);
router.route("/delete").post(deleteUser);
router.route("/login").post(logInUser);

export default router;
