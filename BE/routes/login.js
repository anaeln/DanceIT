const express = require("express");
const router = express.Router();

const loginController  = require("../controllers/login");

router.get("/register", loginController.registerForm);
router.post("/register", loginController.register);
router.get("/login", loginController.loginForm);
router.post("/login", loginController.login);
router.get('/logout',loginController.logout);

router.get('/', loginController.isLoggedIn, loginController.login);

router.get('/initProfile', loginController.isLoggedIn, loginController.initProfilePage);
router.get('/userProfile', loginController.isLoggedIn, loginController.userProfilePage);


module.exports = router;
