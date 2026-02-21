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

    const wordCount = parsedText.split(/\s+/).length;
    const charCount = parsedText.length;

    const resume = await Resume.create({
      userId: req.user.id,
      originalFileName: req.file.originalname,
      parsedText,
      wordCount,
      charCount
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

export const getUserResumes = async (req, res) => {
  try{
    const resumes = await Resume.find({ userId: req.user.id })
    .select("-parsedText")
    .sort({ createdAt: -1 });

    res.status(200).json(resumes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch resumes" });
  }
};

export const deleteResumes = async (req, res) => {
  try {
    const { id } = req.params;

    const resume = await Resume.findOne({
      _id: id,
      userId: req.user.id
    });

    if (!resume) {
      return res.status(404).json({ message: "Resume not found" });
    }

    await resume.deleteOne();

    res.status(200).json({ message: "Resume deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to delete resume" });
  }
};