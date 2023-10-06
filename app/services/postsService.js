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
    return await PostModel.findOneAndRemove({id})
}


}
module.exports = new PostService();


