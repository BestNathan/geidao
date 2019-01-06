const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
    createdTime: {type: Date, default: Date.now},
    content: mongoose.SchemaTypes.Mixed,
    username: String,
    type: String,
})

logSchema.index({username: 1}, {background: true});

module.exports = mongoose.model('log', logSchema);