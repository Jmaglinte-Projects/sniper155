import express from 'express';

import { getReceipts } from '../controllers/receipt.js';

const router = express.Router();
import auth from "../middleware/auth.js";

router.get('/', getReceipts);
// router.post('/',auth,  createPost);
// router.patch('/:id', auth, updatePost);
// router.delete('/:id', auth, deletePost);
// router.patch('/:id/likePost', auth, likePost);

export default router;