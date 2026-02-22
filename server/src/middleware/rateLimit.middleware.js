import rateLimit from "express-rate-limit";

export const matchLimiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 10, message: "Too many match requests. Try again later." });