const express = require("express");
const router = express.Router();
const Post = require("../models/post.js");

router.get("/", async (req, res) => {
    const posts = await Post.find();

    res.json({ posts });
});

router.post("/", (req, res) => {
    const { title, text } = req.query;

    const newPost = new Post({ title, text, comments: [] });

    newPost.save((err, result) =>
        err ? res.json({ err, result: null }) : res.json({ err: null, result })
    );
});

router.delete("/", async (req, res) => {
    const { id } = req.query;

    await Post.deleteOne({ _id: id });

    res.json({ status: 200 });
});

router.get("/post", async (req, res) => {
    const { postId } = req.query;

    const post = await Post.find({ _id: postId });

    res.json({ post });
});

router.put("/title", async (req, res) => {
    const { postId, title } = req.query;

    await Post.updateOne({ _id: postId }, { $set: { title: title } });

    res.json({ status: 200 });
});

router.put("/text", async (req, res) => {
    const { postId, text } = req.query;

    await Post.updateOne({ _id: postId }, { $set: { text } });

    res.json({ status: 200 });
});

router.get("/comments", async (req, res) => {
    const { postId } = req.query;
    const comments = await Post.find({ _id: postId }, { _id: 0, comments: 1 });

    res.json({ result: comments });
});

router.put("/comments", async (req, res) => {
    const { postId, commentAuthor, text } = req.query;

    await Post.updateOne(
        { _id: postId },
        { $push: { comments: { commentAuthor, text } } }
    );

    const comments = await Post.find({ _id: postId }, { _id: 0, comments: 1 });

    res.json({ comments });
});

module.exports = router;
