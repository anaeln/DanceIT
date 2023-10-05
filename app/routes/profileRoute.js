const express = require('express');
const router = express.Router();
const path = require('node:path');
const authMiddleware = require(path.join(__dirname, '../middlewares/authMiddlewar.js'));

const profileController = require(path.join(__dirname, '../controllers/profileController.js'));

router.get('/profile', authMiddleware, profileController.userInfo);


module.exports = router;