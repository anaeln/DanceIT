const express = require('express');
const router = express.Router();
const path = require('node:path');
const authMiddleware = require(path.join(__dirname, '../middlewares/authMiddlewar.js'));
const studiosController = require(path.join(__dirname, '../controllers/studiosController.js'));


router.get('/studios', authMiddleware, studiosController.studios);

module.exports = router;
