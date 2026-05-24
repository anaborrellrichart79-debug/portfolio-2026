// routes/userRoutes.js

import express from "express";
import { getUsers, createNewUser, loginUser } from "../controllers/userControllers.js";

const router = express.Router();

router.get("/", getUsers);
router.post("/", createNewUser);
router.post("/login", loginUser);

export default router;