const express = require('express');
const Permission = require('../Model/Permission_model');

const router = express.Router();

// Create a new permission
router.post('/permissions', async (req, res) => {
  try {
    const permission = new Permission(req.body);
    await permission.save();
    res.status(201).json(permission);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all permissions
router.get('/permissions', async (req, res) => {
  try {
    const permissions = await Permission.find();
    res.json(permissions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
