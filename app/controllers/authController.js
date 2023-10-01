const path = require('node:path');

const authService = require(path.join(__dirname, '../services/authService.js'));

class AuthController {
  render(req, res) {
    const pageName = req.path.substring(1);
    res.render(pageName);
  }

  async registration(req, res) {
    const { email, fullName, username, password } = req.body;
    try {
      const userEmail = await authService.registration(email, fullName, username, password);
      req.session.userKey = userEmail;
      res.redirect('/profile');
    } catch (error) {
      res.render('errorPage', { error });
    }
  }

  async login(req, res) {
    const { email, password } = req.body;
    try {
      const userEmail = await authService.login(email, password);

      if (userEmail) {
        req.session.userKey = userEmail;
        res.redirect('/profile');
      }
    } catch (error) {
      res.render('errorPage', { error });
    }
  }
  async logout(req, res) {
    req.session.destroy(() => {
      res.redirect('/login');
    });
  }
}
module.exports = new AuthController();
