import express from "express";
import protect from "../middleware/auth.middleware";

const router = express.Router();

router.get("/", protect, (req, res) => {
    res.json({ message: "Protected route accessed", userId: req.user._id});
});

module.exports = router;