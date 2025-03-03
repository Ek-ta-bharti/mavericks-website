const Student = require('../models/Student');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Register Student
const registerStudent = async(req, res) => {
    const { name, email, password, referrerId } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const student = new Student({ name, email, password: hashedPassword });
        await student.save();

        if (referrerId) {
            const referrer = await Student.findById(referrerId);
            referrer.referrals.push(student._id);
            referrer.points += 10; // Add referral points
            await referrer.save();
        }

        res.status(201).json({ message: 'Student registered successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Login Student
const loginStudent = async(req, res) => {
    const { email, password } = req.body;
    try {
        const student = await Student.findOne({ email });
        if (!student) return res.status(400).json({ error: 'Invalid credentials' });

        const isMatch = await bcrypt.compare(password, student.password);
        if (!isMatch) return res.status(400).json({ error: 'Invalid credentials' });

        const token = jwt.sign({ id: student._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get Leaderboard
const getLeaderboard = async(req, res) => {
    try {
        const students = await Student.find().sort({ points: -1 }).limit(10);
        res.json(students);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { registerStudent, loginStudent, getLeaderboard };