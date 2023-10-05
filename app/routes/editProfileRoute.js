const express = require('express');
const router = express.Router();
const path = require('node:path');
const authMiddleware = require(path.join(__dirname, '../middlewares/authMiddlewar.js'));

const editProfileController = require(path.join(__dirname, '../controllers/editProfileController.js'));


router.get('/editProfile', authMiddleware, editProfileController.userInfo);

module.exports = router;