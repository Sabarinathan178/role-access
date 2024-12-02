const express = require('express');
const Role = require('../Model/Role_model');

const router = express.Router();

// Create a new role
router.post('/roles', async (req, res) => {
  try {
    const role = new Role(req.body);
    await role.save();
    res.status(201).json(role);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all roles
router.get('/roles', async (req, res) => {
  try {
    const roles = await Role.find().populate('permissions');
    res.json(roles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
