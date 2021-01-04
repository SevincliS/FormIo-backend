import express from "express";

import {
  createForm,
  getForms,
  editForm,
  deleteForm,
  createSubmission,
} from "../controllers/forms.js";

const { Router } = express;
const router = Router();

router.route("/create").post(createForm);
router.route("/createSubmission/:endPoint").post(createSubmission);
router.route("/get").post(getForms);
router.route("/edit").post(editForm);
router.route("/delete").post(deleteForm);

export default router;
