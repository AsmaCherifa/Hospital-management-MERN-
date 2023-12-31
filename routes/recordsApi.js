const express = require('express');
const router = express.Router();
const medicalRecordController = require('../controllers/medicalRecordController');

// CRUD operations
router.post('/create', medicalRecordController.createMedicalRecord);
router.get('/getAll', medicalRecordController.getMedicalRecords);
router.get('/getRecord/:recordNumber', medicalRecordController.getMedicalRecordByNum);
router.put('/updateRecord/:id', medicalRecordController.updateMedicalRecord);
router.delete('/delete/:id', medicalRecordController.deleteMedicalRecord);

module.exports = router;
