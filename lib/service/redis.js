const moment = require('moment');
const hub = require('../hub');
const {Redis} = require('../connections');
const RedisListener = Redis.duplicate();

const geidaoKey = 'geidao:early';
RedisListener.config('set', 'notify-keyspace-events', 'KEA');
RedisListener.subscribe('__keyevent@0__:expired')

RedisListener.on('message', (channel, key) => {
    if (key !== geidaoKey) {
        return;
    }

    hub.emit('run');
})

function getLeftSeconds() {
    return moment().add(1, 'd').startOf('d').add(6, 'h').add(5, 's').diff(moment(), 'seconds');
}

function setTomorrowKey() {
    const expireSeconds = getLeftSeconds();
    return Redis.setex(geidaoKey, expireSeconds, moment().format('YYYY-MM-DD HH:mm:ss'))
}

module.exports = {
    setTomorrowKey,
}