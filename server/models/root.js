const mongoose = require("mongoose");

const rootSchema = new mongoose.Schema({
    username: String,
    password: String,
});

const rootModel = mongoose.model("Root", rootSchema);

module.exports = rootModel;
