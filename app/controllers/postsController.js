class postsController {
  render(data) {
    const pageName = req.path.substring(1);
    res.render(pageName, { data });
  }

  async allPosts(req, res) {
    const sessionId = req.session.userKey;

    try {
      const contentPage = 'posts.ejs';
      res.render('layout', { content: contentPage });
    } catch (e) {
      res.redirect('/register?error=1');
    }
  }
}
module.exports = new postsController();
