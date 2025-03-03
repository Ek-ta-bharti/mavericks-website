const Event = require('../models/Event');

// Add Event
const addEvent = async(req, res) => {
    try {
        const { eventName, startDate, endDate, description, rules, eligibility, prize } = req.body;
        const photo = req.files['photo'][0].path;
        const gif = req.files['gif'][0].path;

        const newEvent = new Event({
            eventName,
            startDate,
            endDate,
            photo,
            gif,
            description,
            rules,
            eligibility,
            prize,
        });

        await newEvent.save();
        res.status(201).json({ message: 'Event added successfully', event: newEvent });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get All Events
const getEvents = async(req, res) => {
    try {
        const events = await Event.find();
        res.status(200).json(events);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update Event
const updateEvent = async(req, res) => {
    try {
        const { id } = req.params;
        const updatedEvent = await Event.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json({ message: 'Event updated successfully', event: updatedEvent });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Delete Event
const deleteEvent = async(req, res) => {
    try {
        const { id } = req.params;
        await Event.findByIdAndDelete(id);
        res.status(200).json({ message: 'Event deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { addEvent, getEvents, updateEvent, deleteEvent };