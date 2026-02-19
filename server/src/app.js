import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes";
import healthRoutes from "./routes/health.routes";
import protectedRoutes from "./routes/protected.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/health", healthRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/protected", protectedRoutes);

module.exports = app;