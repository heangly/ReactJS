import express from 'express';
import { deleteAlert } from '../controllers/alertController.js';

const router = express.Router();

router.route('/:user/:id').delete(deleteAlert);

export default router;
