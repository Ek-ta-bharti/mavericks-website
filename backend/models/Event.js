const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    eventName: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    photo: { type: String, required: true },
    gif: { type: String, required: true },
    description: { type: String, required: true },
    rules: { type: String, required: true },
    eligibility: { type: String, required: true },
    prize: { type: String, required: true },
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;