const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const tokenMiddleware = require('../middlewares/auth'); 
const User = require('../models/user'); 

router.post('/register', async (req, res) => {
  try {
    const { username, password, gender, role, email, phone, account_state, address, birthdate } = req.body;

    // Check if the username is already taken
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: 'Username is already taken' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const newUser = new User({
      username,
      password: hashedPassword,
      gender,
      role,
      email,
      phone,
      account_state,
      address,
      birthdate,
    });
    await newUser.save();
   /* const newUser = new User({
      username: 'exampleUser',
      password: 'hashedPassword',  // You should use a hashed password here
      address: '123 Main St',
      birthday: new Date('1990-01-01'),
      gender: 'male',
      role: 'user',
      email: 'user@example.com',
      phone: '123-456-7890',
      account_state: 1,
    });
    
*/

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Registration failed. Check the server logs for more details.' });

  }
});



router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Compare hashed password
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id, username: user.username }, 'your-secret-key', { expiresIn: '1h' });

    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    console.error('Error in login route:', error);
    res.status(500).json({ error: 'Login failed' });
  }
});


// Create a new user
router.post('/createUser', async (req, res) => {
  try {
    const newUser = await User.createUser(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


router.get('/getUser/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await User.getUserById(userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(user);
  } catch (error) {
    console.error('Error getting user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

//
router.get('/listUsers', async (req, res) => {
  try {
    const users = await User.find();

    res.json(users);
  } catch (error) {
    console.error('Error getting user list:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Update a user by ID
router.put('/updateUser/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;
    const updatedUser = await User.updateUser(userId, req.body);

    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(updatedUser);
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete a user by ID
router.delete('/deleteUser/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;
    const deletedUser = await User.deleteUser(userId);

    if (!deletedUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


router.put('/activateDeactivateUser/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Toggle the account_state
    user.account_state = user.account_state === 0 ? 1 : 0;
    
    const updatedUser = await user.save();

    res.json(updatedUser);
  } catch (error) {
    console.error('Error activating/deactivating user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


module.exports = router;
