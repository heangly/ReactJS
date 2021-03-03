import express from 'express';
import { getPosts, deletePost } from '../controllers/postController.js';

const router = express.Router();

router.route('/:id').delete(deletePost);
router.route('/').get(getPosts);

export default router;
