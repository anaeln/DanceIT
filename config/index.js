const express = require('express');
const path = require('node:path');
const authRoutes = require(path.join(__dirname, '../app/routes/authRoute.js'));
const postRoutes = require(path.join(__dirname, '../app/routes/postsRoute.js'));
const profileRoutes = require(path.join(__dirname, '../app/routes/profileRoute.js'));
const router = express.Router();
const authMiddleware = require(path.join(__dirname, '../app/middlewares/authMiddlewar.js'));

router.get('/', authMiddleware);

router.use(authRoutes);
router.use(profileRoutes);
router.use(postRoutes);

module.exports = router;
