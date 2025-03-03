// routes/studentRoutes.js
const express = require('express');
const { registerStudent, loginStudent, getLeaderboard } = require('../controllers/studentController');

const router = express.Router();

router.post('/', registerStudent); // This is the route being used
router.post('/login', loginStudent);
router.get('/leaderboard', getLeaderboard);

module.exports = router;