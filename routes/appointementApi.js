const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/appointementController');

// Create a new appointment
router.post('/create', appointmentController.createAppointment);
/*
// Get all appointments
router.get('/getAll', appointmentController.getAllAppointments);

// Get appointment by ID
router.get('/get/:id', appointmentController.getAppointmentById);

// Update appointment by ID
router.put('/update/:id', appointmentController.updateAppointmentById);
*/
module.exports = router;
