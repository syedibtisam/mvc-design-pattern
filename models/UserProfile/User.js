const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

const User = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    fullname: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
});
User.pre("save", async function (next) {
    const saltRounds = 12;
    this.password = await bcrypt.hash(this.password, saltRounds);
    next();
});


module.exports = mongoose.model("user", User);
