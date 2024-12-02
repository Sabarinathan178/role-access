const express = require('express');
const router = express.Router();
const checkPermission = require('./checkPermission');

// Example: Allow only users with 'read' permission on 'users' resource
router.get('/users', checkPermission('read', 'users'), async (req, res) => {
  // Your logic to fetch users
  res.json({ message: 'Users fetched successfully' });
});

module.exports = router;
