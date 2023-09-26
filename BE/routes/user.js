const express = require('express');
var router = express.Router();
const UserController = require('../controllers/user');

router.route('/')
    .get(UserController.getUsers)
    .post(UserController.createUser);

router.route('/:username')
    .get(UserController.getUser)
    .patch(UserController.updateUser)
    .delete(UserController.deleteUser);

module.exports = router;