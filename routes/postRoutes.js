const express = require('express');
const router = express.Router();
const { createPost } = require('../controllers/postController');
const auth = require('../utils/auth');
router.post('/create_post', auth, createPost);
module.exports = router;
