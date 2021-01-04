import express from "express";

import {
  createMembership,
  getMemberships,
  editMembership,
  deleteMembership,
} from "../controllers/memberships.js";

const { Router } = express;
const router = Router();

router.route("/createMembership").post(createMembership);
router.route("/get").post(getMemberships);
router.route("/edit").post(editMembership);
router.route("/delete").post(deleteMembership);

export default router;
