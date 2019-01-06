const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    verify_code: String,
    enabled: {type: Boolean, default: false},
})

userSchema.index({enabled: 1});

module.exports = mongoose.model('user', userSchema);