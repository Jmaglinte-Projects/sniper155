import express from 'express';

import { getReceipt, createReceipt, deleteReceipt } from '../controllers/receipt.js';

const router = express.Router();
import auth from "../middleware/auth.js";

router.get('/', getReceipt);
router.post('/', auth,  createReceipt);
router.delete('/:id', auth, deleteReceipt);
// router.patch('/:id', auth, updatePost);
// router.patch('/:id/likePost', auth, likePost);

export default router;