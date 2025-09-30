const express = require('express');
const router = express.Router();
const Registration = require('../models/Registration');

// Register for event
router.post('/', async (req, res) => {
    const { userName, userEmail, event } = req.body;
    const registration = new Registration({ userName, userEmail, event });
    await registration.save();
    res.json({ message: 'Registration successful', registration });
});

// View user registrations
router.get('/:email', async (req, res) => {
    const registrations = await Registration.find({ userEmail: req.params.email }).populate('event');
    res.json(registrations);
});

// Cancel registration
router.delete('/:id', async (req, res) => {
    await Registration.findByIdAndDelete(req.params.id);
    res.json({ message: 'Registration cancelled' });
});

module.exports = router;
