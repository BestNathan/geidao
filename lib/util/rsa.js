const rsa = require('node-rsa');

const publicKey = `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDxOL2gVOb7R4dZR0c2SALRVjdItgSVfkybnGq
QOwEyVnX49LIaHAbGTIDlRN93MKVA4Jd8Ed0XfeXVBnwRb9BgrQ+EKZTZRGpbfC9bGp+E8umB2C
Fi1BF3Yo6OIbbw2iPUvh/mEZHeHC+HQ4UomPuLKq3MGVvU8762u+VuqDI+lwIDAQAB
-----END PUBLIC KEY-----`;
const key = new rsa(publicKey, 'public', {
    environment: 'node',
    encryptionScheme: 'pkcs1'
});

function enc(str) {
    return key.encrypt(str, 'base64');
}

module.exports = enc;
