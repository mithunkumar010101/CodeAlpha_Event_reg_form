const express = require('express');
const router = express.Router();
const Event = require('../models/Event');

// Get all events
router.get('/', async (req, res) => {
    const events = await Event.find();
    res.json(events);
});

// Get event details
router.get('/:id', async (req, res) => {
    const event = await Event.findById(req.params.id);
    res.json(event);
});

module.exports = router;
