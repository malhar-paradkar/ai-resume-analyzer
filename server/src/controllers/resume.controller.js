import pdf from "pdf-parse";
import Resume from "../models/resume.model.js";

export const uploadResume = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(500).json({ message: "No file uploaded" });
        }

        const data = await pdf(req.file.buffer);

        const cleanedText = data.text.replace(/\s+/g, " ").trim();

        const resume = await Resume.create({ userId: req.user.id, originalFileName: req.file.originalname, parsedText: cleanedText });

        res.status(201).json({ message: "Resume uploaded successfully", resumeId: resume._id });
    }   catch (err) {
        console.error(err);
        res.status(500).json({ message: "Resume parsing failed" });
    }
};