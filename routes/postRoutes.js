const express = require('express');
const router = express.Router();
const { createPost, fetchPosts } = require('../controllers/postController');
const auth = require('../utils/auth');
router.post('/create_post', auth, createPost);
router.get('/posts/:id', auth, fetchPosts);
module.exports = router;
