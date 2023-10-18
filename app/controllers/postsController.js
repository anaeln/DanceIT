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


  // TODO: need to allow create post without an image - only content
  async createPost(req, res) {
    const { creator, publishTime, postContent, likes } = req.body;
    const filename = req.file.filename;
    const userMail = req.session.userKey;
    try {
      const newPost = await PostService.createPost({ creator, publishTime, postContent, likes, userMail, filename });
      res.redirect('/posts');
    } catch (error) {
      res.render('errorPage', { error });
    }
  }

  async deletePost(req, res) {
    const postId = req.params;
    try {
      const postToDelete = await PostService.deletePost(postId);
      res.redirect('/posts');
    } catch (error) {
      res.render('errorPage', { error });
    }
  }


  async updatePost(req, res) {
    const postId = req.params;
    const editedContent = req.body.editedContent;
    const filename = req.file?.filename;
    try {
      const updatedPost = await PostService.updatePost(postId, editedContent, filename);
      res.redirect('/posts');
    } catch (error) {
      res.render('errorPage', { error });
    }
  }
}

module.exports = new postsController();
