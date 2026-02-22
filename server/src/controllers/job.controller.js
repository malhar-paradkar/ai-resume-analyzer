import Job from "../models/job.model.js";

export const createJob = async (req, res) => {
    try {
        const { title, description } = req.body;

        const job = await Job.create({ userId: req.user.id, title, description });

        res.status(201).json(job);
    }   catch (err) {
        console.error(err);
        res.status(500).json({ message: "Failed to create job" });
    }
};