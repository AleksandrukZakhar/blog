const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: String,
    avatar: String,
});

const userModel = mongoose.model(userSchema);

module.exports = userModel;
