const loginService = require("../services/login")

function isLoggedIn(req, res, next) {
  if (req.session.username != null)
    return next()
  else
    res.redirect('/login')
}
// function privatePage(req, res) {  
//   res.render("privatePage", {username: req.session.username})
// }
function initProfilePage(req, res) {  
  res.render("initProfile", {username: req.session.username})
}
function userProfilePage(req, res) {  
  res.render("userProfile", {username: req.session.username})
}
function loginForm(req, res) {
   res.render("login", {}) }

function registerForm(req, res) {
   res.render("register", {}) }

function logout(req, res) {
  req.session.destroy(() => {
    res.redirect('/login');
  });
}

async function login(req, res) {
  const { username, password } = req.body

  const result = await loginService.login(username, password)
  if (result) {
    req.session.username = username
    res.redirect('/userProfile')
  }
  else
    res.redirect('/login?error=1')
}

async function register(req, res) {
  const { email, fullName, username, password } = req.body
  try {
    await loginService.register(email, fullName, username, password)    
    req.session.username = username
    res.redirect('/initProfile')
  }
  catch (e) { 
    res.redirect('/register?error=1')
  }    
}

module.exports = {
  login,
  loginForm,
  register,
  registerForm,
  logout,
  initProfilePage,
  userProfilePage,
  isLoggedIn
}