import express from 'express';

import { getReceipt, createReceipt } from '../controllers/receipt.js';

const router = express.Router();
import auth from "../middleware/auth.js";

router.get('/', getReceipt);
router.post('/create', auth,  createReceipt);
// router.patch('/:id', auth, updatePost);
// router.delete('/:id', auth, deletePost);
// router.patch('/:id/likePost', auth, likePost);

export default router;