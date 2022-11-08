const express = require("express");
const router = express.Router();
const Post = require("../models/post.js");
const User = require("../models/user.js");

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

router.put("/title", async (req, res) => {
    const { postId, title } = req.query;

    await Post.updateOne({ _id: postId }, { $set: { title: title } });

    res.json({ status: 200 });
});

router.put("/text", async (req, res) => {
    const { postId, text } = req.query;

    await Post.updateOne({ _id: postId }, { $set: { text } });

    const updatedText = Post.find({ _id: postId }, { _id: 0, text: 1 });

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

router.get("/user", async (req, res) => {
    const { username } = req.query;

    const user = await User.find({ username });

    res.json({ user });
});

router.post("/user", (req, res) => {
    const { username } = req.query;
    const avatar = `https://avatars.dicebear.com/api/adventurer-neutral/${username}.svg`;

    const newUser = new User({ username, avatar });

    newUser.save((err, result) =>
        err ? res.json({ err, result: null }) : res.json({ err: null, result })
    );
});

module.exports = router;
