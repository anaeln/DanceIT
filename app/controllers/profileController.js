const path = require('node:path');

const profileService = require(path.join(__dirname, '../services/profileService.js'));

class profileController {
  render(data) {
    const pageName = req.path.substring(1);
    res.render(pageName, { data });
  }

  async userInfo(req, res) {
    const sessionId = req.session.userKey;

    try {
      const userInfo = await profileService.getUser(sessionId);
      const { email, fullName } = userInfo;
      const contentPage = 'profile.ejs';
      res.render('layout', { username: email, content: contentPage });
    } catch (e) {
      res.redirect('/register?error=1');
    }
  }
}
module.exports = new profileController();
