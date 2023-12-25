const mongoose = require('mongoose');

const hospitalSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String },
  email: { type: String },
  phone: { type: Number },
  logo: { type: String }, 

});

const Hospital = mongoose.model('Hospital', hospitalSchema);

Hospital.createHospital = async function (data) {
  const newHospital = new Hospital(data);
  return newHospital.save();
};

module.exports = Hospital;
