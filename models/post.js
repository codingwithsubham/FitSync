const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'profile',
    require: true,
  },
  caption: {
    type: String,
    require: true,
  },
  images: [
    {
      type: Object,
      require: true,
    },
  ],
  timeStamp: {
    type: Date,
    default: Date.now(),
  },
  likes: [
    {
      likedBy: {
        type: mongoose.Schema.ObjectId,
        ref: 'profile',
      },
      timeStamp: {
        type: Date,
        default: Date.now(),
      },
    },
  ],
  comments: [
    {
      text: {
        type: String,
      },
      commentedBy: {
        type: mongoose.Schema.ObjectId,
        ref: 'profile',
      },
      timeStamp: {
        type: Date,
        default: Date.now(),
      },
    },
  ],
});

module.exports = Post = mongoose.model('post', PostSchema);
