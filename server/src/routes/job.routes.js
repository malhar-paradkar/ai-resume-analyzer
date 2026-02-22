import express from "express";
import { createJob } from "../controllers/job.controller.js";
import protect from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/", protect, createJob);

export default router;