const config = require('config');
const ioredis = require('ioredis');

module.exports = new ioredis({
    host: config.redis.host,
    password: config.redis.password,
    port: config.redis.port,
});
