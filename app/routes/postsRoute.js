const express = require('express');
const router = express.Router();
const path = require('node:path');
const authMiddleware = require(path.join(__dirname, '../middlewares/authMiddlewar.js'));
const postsController = require(path.join(__dirname, '../controllers/postsController.js'));

router.get('/posts', authMiddleware, postsController.getAllPosts);
router.post('/posts/create', authMiddleware, postsController.createPost);

module.exports = router;
