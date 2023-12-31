const Appointment = require('../models/appointement');

// Create a new appointment
const createAppointment = async (req, res) => {
  try {
    const { date, hour, status, description, patient, doctor } = req.body;

    const newAppointment = new Appointment({
      date,
      hour,
      status,
      description,
      patient,
      doctor,
    });

    const savedAppointment = await newAppointment.save();

    res.status(201).json(savedAppointment);
  } catch (error) {
    console.error('Error creating appointment:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
/*
// Get all appointments
const getAllAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.status(200).json(appointments);
  } catch (error) {
    console.error('Error fetching appointments:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get appointment by ID
const getAppointmentById = async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id);
    if (!appointment) {
      return res.status(404).json({ error: 'Appointment not found' });
    }
    res.status(200).json(appointment);
  } catch (error) {
    console.error('Error fetching appointment by ID:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update appointment by ID
const updateAppointmentById = async (req, res) => {
  try {
    const updatedAppointment = await Appointment.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedAppointment) {
      return res.status(404).json({ error: 'Appointment not found' });
    }

    res.status(200).json(updatedAppointment);
  } catch (error) {
    console.error('Error updating appointment by ID:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
*/
module.exports = {
  createAppointment,
  /*getAllAppointments,
  getAppointmentById,
  updateAppointmentById,*/
};
