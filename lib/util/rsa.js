const rsa = require('node-rsa');

const publicKey = '-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDxOL2gVOb7R4dZR0c2SALRVjdItgSVfkybnGqQOwEyVnX49LIaHAbGTIDlRN93MKVA4Jd8Ed0XfeXVBnwRb9BgrQ+EKZTZRGpbfC9bGp+E8umB2CFi1BF3Yo6OIbbw2iPUvh/mEZHeHC+HQ4UomPuLKq3MGVvU8762u+VuqDI+lwIDAQAB-----END PUBLIC KEY-----';
const key = new rsa();
key.importKey(publicKey, 'public')

function enc(str) {
    const encData = key.encrypt(str, 'base64');
    const step = 76;
    let res = '';
    for (let i = 0; i < encData.length; i += step) {
        res += encData.slice(i, i + step) + "\\n"
    }
    return res.replace(/=/g, "\\u003d")
}

module.exports = enc;

enc('qqq111')