import express from 'express';
import { authUser, registerUser } from '../controllers/userController.js';

const router = express.Router();

router.route('/').post(authUser);
router.route('/register').post(registerUser);

export default router;
