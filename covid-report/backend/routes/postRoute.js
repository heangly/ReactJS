import express from 'express';
import {
  getPosts,
  deletePost,
  createPost
} from '../controllers/postController.js';

const router = express.Router();

router.route('/:id').delete(deletePost);
router.route('/').get(getPosts);
router.route('/').post(createPost);

export default router;
