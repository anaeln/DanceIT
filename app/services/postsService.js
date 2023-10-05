const PostModel = require('../models/postModel');

class PostService {

async createPost ({postContent, postMedia, group, likes, userMail} ) {

        const post = await PostModel.create({
            creator:  userMail,
            postContent: postContent,
            postMedia: postMedia,
            likes: likes
        });
    
        if(group)
            post.group = group;
        if(likes)
            post.likes = likes;

        return await post.save();
    };

async getAllPosts () {
    return await PostModel.find({});
};

// async getPostById (id) {
    //     return await PostModel.findById(id);
    // };

// async updatePost (id, postContent) {
//     const post = await getPostById(id);
//     if (!post)
//         return null;

//     post.postContent = postContent;
//     await post.save();
//     return post;
// };

// async deletePost (id) {
//     const post = await getArticleById(id);
//     if (!post)
//         return null;

//     await post.remove();
//     return post;
// };  

}

module.exports = new PostService();


