// index.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth'); 
const hosRoutes = require('./routes/hospital'); 
const users = require('./routes/usersApi'); 
const medicalRecordRoutes = require('./routes/recordsApi');
const appointementRoute = require('./routes/appointementApi');

const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/db1');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
  app.use('/auth', authRoutes);
  app.use('/hospital', hosRoutes);
  app.use('/users', users);
  app.use('/records', medicalRecordRoutes);
  app.use('/appointement', appointementRoute);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
