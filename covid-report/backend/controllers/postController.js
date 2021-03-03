import asyncHandler from 'express-async-handler';
import Post from '../models/postModel.js';

// @desc Fetch all posts
// @route GET /api/posts
export const getPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find({});
  console.log('Receving GET request for posts data'.yellow);

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
