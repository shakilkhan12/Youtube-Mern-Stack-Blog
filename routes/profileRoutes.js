const express = require('express');
const auth = require('../utils/auth');
const router = express.Router();
const { updateName } = require('../controllers/profileController');
router.post('/updateName', auth, updateName);
module.exports = router;
