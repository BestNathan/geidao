const config = require('config');
const mongoose = require('mongoose');

function connectMongo() {
    const uri = `mongodb://${config.mongo.host}:${config.mongo.port}`
    return mongoose.connect(uri, {
        user: config.mongo.username,
        pass: config.mongo.password,
        auth: {
            authdb: config.mongo.database,
        },
        dbName: config.mongo.database,
    })
};

module.exports = connectMongo();