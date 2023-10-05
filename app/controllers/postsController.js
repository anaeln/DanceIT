const path = require('node:path');

const PostService = require(path.join(__dirname, '../services/postsService.js'));

class postsController {
  render(data) {
    const pageName = req.path.substring(1);
    res.render(pageName, { data });
  }

  async getAllPosts(req, res) {
    const posts = await PostService.getAllPosts();
    try {
      const contentPage = 'posts.ejs';
      res.render('layout', { posts: posts, content: contentPage });
    } catch (e) {
      res.redirect('/register?error=1');
    }
  }

  async createPost (req, res) {
    const { creator, publishTime, postContent, postMedia, group, likes } = req.body;
    const userMail = req.session.userKey;
    // console.log(req.session.userKey);
    try {
      const newPost = await PostService.createPost({creator, publishTime, postContent, postMedia, group, likes, userMail});
      res.redirect('/posts');
    } catch (error) {
      res.render('errorPage', { error });
    }
  }
}; 


module.exports = new postsController();
