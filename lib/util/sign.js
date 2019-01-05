const crypto = require('crypto');

function md5(str) {
    return crypto.createHash('md5').update(str).digest('hex').toUpperCase();
}

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

// console.log(md5('qqqq1111'));
// console.log(sign({
//     secret: '6fd1df8a054e915852f9b738f488cf5b',
//     signType: 'md5',
//     verify_mode: 3,
//     verify_code: 'qqqq1111',
// }));

module.exports = {
    sign,
}