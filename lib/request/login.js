const axios = require('axios').default;
const {rsa} = require('../util');
const loginUrl = 'https://aipi.guanaitong.com/api/v1/passport/login';

// POST https://aipi.guanaitong.com/api/v1/passport/login HTTP/1.1
// Content-Type: application/json; charset=UTF-8
// Content-Length: 237
// Host: aipi.guanaitong.com
// Connection: Keep-Alive
// Accept-Encoding: gzip
// Content-Type: application/json; charset=UTF-8
// versionCode: 20000041
// Accept-Encoding: gzip, deflate
// Connection: keep-alive
// Accept: */*
// x-client-version: 2.0.0
// x-os-name: Android
// x-os-version: 4.4.2
// x-carrier: ChinaMobile
// x-network-type: WiFi
// x-request-id: aae98aed-f7f4-414f-bab4-5b120b57a755
// x-api-version: 
// x-token: 
// x-ts: 1546678824905
// x-device-id: 1BA77DACE2F0D5E2A0DE131A35C80756877C0991
// x-sign: 2fa9d8b29a42a7055599f442a182ac09
// User-Agent: GatApp/2.0.0 com.guanaitong/20000041 (Android 19; samsung/SM-G955N; WiFi)
// Pragma: no-cache

module.exports = function login(username, password) {
    password = rsa(password);
    const data = JSON.stringify({
        domain: '',
        login_name: username,
        password
    }).replace(/\\\\/g, '\\')

    return axios.post(loginUrl, data, {
        headers: {
            'User-Agent': 'GatApp/2.0.0 com.guanaitong/20000041 (Android 19; samsung/SM-G955N; WiFi)',
            versionCode: 20000041,
            'x-client-version': '2.0.0',
            'x-os-name': 'Android',
            'x-os-version': '4.4.2',
            'x-carrier': 'ChinaMobile',
            'x-network-type': 'WiFi',
            'x-api-version': '',
            'x-token': '',
            'x-ts': Date.now() * 1000,
            'x-device-id': '1BA77DACE2F0D5E2A0DE131A35C80756877C0991',
            'x-request-id': 'aae98aed-f7f4-414f-bab4-5b120b57a755',
            'x-sign': '00000000000000000000000000000000',
        }
    }).then(data => {
        console.log(data.config);
        console.log(data.data);
    }).catch(e => {
        console.log(e.config);
        console.log(e.response.data);
    })
}

module.exports('13363294078', 'qqq111')