import express from 'express';
import mongoose from 'mongoose';

import receipt from '../models/receipt.js';

const router = express.Router();

export const getReceipt = async (req, res) => {
    try {
        const result = await receipt.find().populate("receipt_creator");
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createReceipt = async (req, res) => {
    const data = req.body;

    const result = new receipt({ ...data, 
		receipt_creator: req.userId, 
		created_at: new Date().toISOString()
	});

    try {
        await result.save();

        res.status(201).json(await receipt.findById(result._id).populate("receipt_creator"));
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const deleteReceipt = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No receipt with id: ${id}`);

    await receipt.findByIdAndRemove(id);

    res.json({ message: "Receipt deleted successfully." });
}

/*

export const updatePost = async (req, res) => {
    const { id } = req.params;
    const { title, message, creator, selectedFile, tags } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = { creator, title, message, tags, selectedFile, _id: id };

    await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost);
}



export const likePost = async (req, res) => {
    const { id } = req.params;

    if (!req.userId) {
        return res.json({ message: "Unauthenticated" });
      }

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const post = await PostMessage.findById(id);

    const index = post.likes.findIndex((id) => id ===String(req.userId));

    if (index === -1) {
      post.likes.push(req.userId);
    } else {
      post.likes = post.likes.filter((id) => id !== String(req.userId));
    }
    const updatedPost = await PostMessage.findByIdAndUpdate(id, post, { new: true });
    res.status(200).json(updatedPost);
}
*/


export default router;