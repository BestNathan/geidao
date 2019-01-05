const md5 = require('./md5');

function sign(obj) {
    let strToEncode = ''

    const secret = obj.secret;
    delete obj.secret;
    strToEncode += secret;

    const keys = Object.keys(obj).sort();
    for (const key of keys) {
        strToEncode += `${key}${obj[key]}`;
    }

    return md5(strToEncode);
}

module.exports = sign;