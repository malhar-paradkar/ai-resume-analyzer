import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    originalFileName: {
        type: String,
        required: true,
    },
    parsedText: {
        type: String,
        required: true,
    }
}, { timestamps: true });

const Resume = mongoose.model("Resume", resumeSchema);

export default Resume;