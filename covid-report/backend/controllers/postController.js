import asyncHandler from 'express-async-handler';
import Post from '../models/postModel.js';
import User from '../models/userModel.js';

// @desc Fetch all posts
// @route POST /api/posts
export const createPost = asyncHandler(async (req, res) => {
  const { user, location, date, contracted } = req.body;

  console.log(location);
  const img =
    location === 'University City Campus'
      ? 'https://d13b2ieg84qqce.cloudfront.net/f7ecb2ccb2eb309102010a4a9944285832fe3976.jpg'
      : location === 'Center City Campus'
      ? 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/HahnemannUHospital_crop.jpg/1920px-HahnemannUHospital_crop.jpg'
      : location === 'Queen Lane Campus'
      ? 'https://theperfectmed.com/wp-content/uploads/2020/10/Drexel.jpg'
      : location === 'Natural Sciences'
      ? 'https://ansp.org/~/media/Images/ans/visit/plan/ANS%20Exterior-636.ashx?la=en'
      : '';

  const newPost = new Post({
    user,
    location,
    date,
    contracted,
    img
  });

  await newPost.save();

  const allUsers = await User.find({});
  for (const alertUser of allUsers) {
    if (alertUser.address === location && alertUser.name !== user) {
      const newAlert = { name: user, location, date, contracted };
      alertUser.alert = [newAlert, ...alertUser.alert];
      alertUser.save();
    }
  }
  res.status(201).json('post created');
});

// @desc Fetch all posts
// @route GET /api/posts
export const getPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find({}).sort({ createdAt: -1 });
  res.json(posts);
});

// @desc Delete a post
// @route DELETE /api/posts
export const deletePost = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const post = await Post.findById(id);
  if (post) {
    await post.remove();
    res.json({ message: 'Post removed' });
  } else {
    res.status(404);
    throw new Error('Post not found');
  }
});
