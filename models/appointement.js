const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  hour: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['scheduled', 'completed', 'canceled'],
    default: 'scheduled',
  },
  description: {
    type: String,
  },
  patient: {
    type: String,

    required: true,
  },
  doctor: {
    type: String,

    required: true,
  },
});

const appointement = mongoose.model('appointement', appointmentSchema);

module.exports = appointement;
