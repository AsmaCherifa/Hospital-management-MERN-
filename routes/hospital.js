const express = require('express');
const router = express.Router();
const Hospital = require('../models/hospital'); 

router.post('/addHospital', async (req, res) => {
    try {
      const newHospital = await Hospital.createHospital(req.body);
      res.status(201).json(newHospital);
    } catch (error) {
      console.error('Error creating :', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
module.exports = router;
