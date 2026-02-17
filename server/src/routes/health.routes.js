import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).json({
        status: "OK",
        message: "AI Resume Analyzer API is running."
    });
});

module.exports = router;