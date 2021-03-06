const crypto = require('crypto');

function md5(str) {
    return crypto.createHash('md5').update(str).digest('hex').toUpperCase();
}

module.exports = md5;