const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    uname: String,
    mobile: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;