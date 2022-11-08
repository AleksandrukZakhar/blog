const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title: String,
    text: String,
    comments: [{ commentAuthor: String, text: String }],
});

const postModel = mongoose.model(postSchema);

module.exports = postModel;
