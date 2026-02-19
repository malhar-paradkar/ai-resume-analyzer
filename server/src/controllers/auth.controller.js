import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.model";

const generateToken = (userId) => {
    return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

exports.register = async (req, res) => {
    try {
        const { email, password } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(password, salt);

        const user = await User.create({ email, passwordHash });

        const token = generateToken(user._id);

        res.status(201).json({ token, user: { id: user._id, email: user.email }});
    }

    catch(err) {
        res.status(500).json({ message: "Server error" });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ messagE: "Invalid credentials" });
        }

        if (!(bcrypt.compare(password, user.passwordHash))) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const token = generateToken(user._id);

        res.statur(200).json({ token, user: {id: user._id, email: user.email } });
    }   catch (err) {
        res.status(500).json({ message: "Server error "});
    }
};