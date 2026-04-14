// routes/userRoutes.js

import express from "express";
import { getUsers, createNewUser } from "../controllers/userControllers.js";

const router = express.Router();

router.get("/", getUsers);
router.post("/", createNewUser);

export default router;