import express from "express";
import { getUserApplications, createNewApplication} from "../controllers/applicationControllers.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", verifyToken, getUserApplications);
router.post("/", verifyToken, createNewApplication);

export default router;