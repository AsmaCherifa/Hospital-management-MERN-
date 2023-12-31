const mongoose = require('mongoose');

const recordSchema = new mongoose.Schema({
  patient: {
    type: String,
    required: true,
  },
  
  recordNumber: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  }
});

const record = mongoose.model('record', recordSchema);

module.exports = record;
