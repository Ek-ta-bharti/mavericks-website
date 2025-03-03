const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const eventRoutes = require('./routes/eventRoutes');
const path = require('path');

dotenv.config();
const app = express();

// Middleware
app.use(cors({
    origin: 'http://localhost:3000', // Allow requests from frontend
    credentials: true,
}));
app.use(express.json());

// Database Connection
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/eventsDB', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/events', eventRoutes);

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Static folder
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));