import Resume from "../models/resume.model.js";
import { parsePDF, parseDOCX } from "../services/parser.service.js";

export const uploadResume = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    let parsedText = "";

    if (req.file.mimetype === "application/pdf") {
      parsedText = await parsePDF(req.file.buffer);
    }

    if (
      req.file.mimetype ===
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ) {
      parsedText = await parseDOCX(req.file.buffer);
    }

    if (!parsedText) {
      return res.status(400).json({ message: "Unable to parse document" });
    }

    const resume = await Resume.create({
      userId: req.user.id,
      originalFileName: req.file.originalname,
      parsedText
    });

    res.status(201).json({
      message: "Resume uploaded successfully",
      resumeId: resume._id
    });

  } catch (error) {
    console.error("Parsing error:", error);
    res.status(500).json({ message: "Resume parsing failed" });
  }
};