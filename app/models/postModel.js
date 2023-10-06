const {Schema, model}= require('mongoose');

const PostSchema=new Schema({
    creator: {
        type: String, // Username
        required: true,
      },
    publishTime: {
        type: Date, // Date and time
        default: Date.now,
      },
    postContent: {
        type: String, // Text content
        required: true,
      },
    img: {
      data: Buffer,
      contentType: String
    },
    group: {
        type: String, // Group name (text)
      },
    likes: {
        type: [String], // Array of user names who liked the post
        default: [], // Initialize as an empty array
      },
    });

module.exports = model('Post',PostSchema);

