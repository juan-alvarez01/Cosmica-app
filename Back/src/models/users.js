const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    comments: String
});

const UserSchema = mongoose.model('Users', userSchema);
module.exports = UserSchema;