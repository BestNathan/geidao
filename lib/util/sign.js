const md5 = require('./md5');

function sign(obj) {
    const secret = obj.secret;
    if (!secret) {
        return;
    }

    delete obj.secret;
    let strToEncode = ''
    strToEncode += secret;

    const keys = Object.keys(obj).sort();
    for (const key of keys) {
        strToEncode += `${key}${obj[key]}`;
    }

    const signStr = md5(strToEncode);
    obj.sign = signStr;
    return obj;
}

module.exports = sign;