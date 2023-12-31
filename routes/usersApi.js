const express = require('express');
const router = express.Router();
const User = require('../models/user'); 

// patients :

router.get('/patients', async (req, res) => {
    try {
      const patients = await User.find({ role: 'patient' });
      res.json(patients);
    } catch (error) {
      console.error('Error getting patients:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  module.exports = router;
