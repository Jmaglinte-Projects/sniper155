import express from "express";
const router = express.Router();

import { getUsers, signin, signup } from "../controllers/user.js";

router.get("/list", getUsers);
router.post("/signin", signin);
router.post("/signup", signup);

export default router;