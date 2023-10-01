const express = require('express');
const router = express.Router();
const path = require('node:path');

const authController = require(path.join(__dirname, '../controllers/authController.js'));

router.get('/login', authController.render);
router.get('/registration', authController.render);

router.post('/registration', authController.registration);
router.post('/login', authController.login);
router.get('/logout', authController.logout);

module.exports = router;
