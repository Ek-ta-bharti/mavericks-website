const express = require('express');
const multer = require('multer');
const { addEvent, getEvents, updateEvent, deleteEvent } = require('../controllers/eventController');
const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/', upload.fields([{ name: 'photo', maxCount: 1 }, { name: 'gif', maxCount: 1 }]), addEvent);
router.get('/', getEvents);
router.put('/:id', updateEvent);
router.delete('/:id', deleteEvent);

module.exports = router;