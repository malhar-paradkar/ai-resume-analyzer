import express from "express";
import {uploadResume, getUserResumes, deleteResumes, matchResumeToJob} from "../controllers/resume.controller.js";
import protect from "../middleware/auth.middleware.js";
import upload from "../middleware/upload.middlware.js";
import { matchLimiter } from "../middleware/rateLimit.middleware.js";

const router = express.Router();

router.post("/upload", protect, upload.single("resume"), uploadResume);
router.post("/match", protect, matchLimiter,  matchResumeToJob);
router.get("/", protect, getUserResumes);
router.delete("/:id", protect, deleteResumes);

export default router;