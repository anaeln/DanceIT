const express = require('express');
const router = express.Router();
const path = require('node:path');
const authMiddleware = require(path.join(__dirname, '../middlewares/authMiddlewar.js'));
const { upload } = require(path.join(__dirname, '../middlewares/imgMiddlewar.js'));
const postsController = require(path.join(__dirname, '../controllers/postsController.js'));


router.get('/posts', authMiddleware, postsController.getAllPosts);
router.post('/posts/create', authMiddleware, upload.single('image'), postsController.createPost);
router.post('/posts/delete/:_id', authMiddleware, postsController.deletePost);
router.post('/posts/update/:_id', authMiddleware, upload.single('image'), postsController.updatePost);

module.exports = router;
