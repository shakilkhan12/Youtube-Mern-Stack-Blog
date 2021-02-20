const express = require('express');
const router = express.Router();
const {
	createPost,
	fetchPosts,
	fetchPost,
	updatePost,
	updateValidations,
} = require('../controllers/postController');
const auth = require('../utils/auth');
router.post('/create_post', auth, createPost);
router.post('/update', [auth, updateValidations], updatePost);
router.get('/posts/:id/:page', auth, fetchPosts);
router.get('/post/:id', auth, fetchPost);
module.exports = router;
