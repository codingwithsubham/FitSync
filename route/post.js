const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Post = require('../models/post');

router.post('/create', auth, async (req, res) => {
  try {
    const { caption, images } = req.body;
    const post = new Post({
      user: req.profile.id,
      caption: caption,
      images: images,
    });
    await post.save();
    return res.json(post);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/', auth, async (req, res) => {
  try {
    const posts = await Post.find({}).sort({timeStamp: -1}).populate();
    return res.json(posts);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
