const MedicalRecord = require('../models/record');

const createMedicalRecord = async (req, res) => {
  try {
    const { patient, recordNumber, description } = req.body;

    /*
    const existingUser = await User.findById(phone);
    if (!existingUser) {
      return res.status(400).json({ error: 'User does not exist' });
    }
    */

    const medicalRecord = new MedicalRecord({ patient, recordNumber, description });
    const savedRecord = await medicalRecord.save();
    res.status(201).json(savedRecord);
  } catch (error) {
    console.error('Error creating medical record:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getMedicalRecords = async (req, res) => {
  try {
    const medicalRecords = await MedicalRecord.find();
    res.status(200).json(medicalRecords);
  } catch (error) {
    console.error('Error fetching medical records:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getMedicalRecordByNum = async (req, res) => {
  try {
    const medicalRecord = await MedicalRecord.find(req.params.id);
    if (!medicalRecord) {
      return res.status(404).json({ error: 'Medical Record not found' });
    }
    res.status(200).json(medicalRecord);
  } catch (error) {
    console.error('Error fetching medical record by ID:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const updateMedicalRecord = async (req, res) => {
  try {
    const { patient, recordNumber, description } = req.body;
    const updatedRecord = await MedicalRecord.findByIdAndUpdate(
      req.params.id,
      { patient, recordNumber, description },
      { new: true }
    );
    if (!updatedRecord) {
      return res.status(404).json({ error: 'Medical Record not found' });
    }
    res.status(200).json(updatedRecord);
  } catch (error) {
    console.error('Error updating medical record:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const deleteMedicalRecord = async (req, res) => {
  try {
    const deletedRecord = await MedicalRecord.findByIdAndDelete(req.params.id);
    if (!deletedRecord) {
      return res.status(404).json({ error: 'Medical Record not found' });
    }
    res.status(204).end();
  } catch (error) {
    console.error('Error deleting medical record:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  createMedicalRecord,
  getMedicalRecords,
  getMedicalRecordByNum,
  updateMedicalRecord,
  deleteMedicalRecord,
};
