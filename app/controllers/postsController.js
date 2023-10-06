const path = require('node:path');
// const tstSchema = require('../models/testModel');
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


// TODO: need to allow create post without an image - only content
  async createPost (req, res) {
    const { creator, publishTime, postContent, img, group, likes } = req.body;
      const filename = req.file.filename; 
      const userMail = req.session.userKey;
    try {
      const newPost = await PostService.createPost({creator, publishTime, postContent, img, group, likes, userMail, filename});
      res.redirect('/posts');
    } catch (error) {
      res.render('errorPage', { error });
    }
  }

  async deletePost (req, res) {
    const postId = req.body.id;
    const postToDelete = await PostService.deletePost(postId);
    res.redirect('/posts');
    } catch (error) {
      res.render('errorPage', { error });
    }
  }

module.exports = new postsController();
