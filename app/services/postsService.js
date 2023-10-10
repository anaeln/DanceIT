const PostModel = require('../models/postModel');
const path = require('node:path');
var fs = require('fs');


class PostService {

async createPost ({postContent, group, likes, userMail, filename} ) {

        const post = await PostModel.create({
            creator:  userMail,
            postContent: postContent,
            // TODO: change img uploade location 
            img: {
                data: fs.readFileSync(path.join(__dirname + '../../uploads/' + filename )),
                contentType: 'image/png'
            },
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

async deletePost (id) {
    return await PostModel.findOneAndRemove(id);
}

async updatePost (_id, postContent, filename) {
    let updatedPost;

    if(postContent){
        updatedPost = await PostModel.findByIdAndUpdate(
            _id,
            {postContent: postContent}
            );
    }
    if (filename) {
        updatedPost = await PostModel.findByIdAndUpdate(
            _id,
            {img: {
                data: fs.readFileSync(path.join(__dirname + '../../uploads/' + filename )),
                contentType: 'image/png'
            }}
            )
          }
    if(updatedPost){
        return await updatedPost.save();
      }    
    } 
}

module.exports = new PostService();


