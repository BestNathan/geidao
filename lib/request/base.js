const axios = require('axios').default;
const uuid = require('uuid');
const qs = require('querystring');
const {md5, sign} = require('../util');
const store = require('../store');

const deviceId = '1BA77DACE2F0D5E2A0DE131A35C80756877C0991';

const appHeaders = {
    'User-Agent': 'GatApp/2.0.0 com.guanaitong/20000041 (Android 19; samsung/SM-G955N; WiFi)',
    'content-type': 'application/json;charset=UTF-8',
    'versionCode': '20000041',
    'x-client-version': '2.0.0',
    'x-os-name': 'Android',
    'x-os-version': '4.4.2',
    'x-carrier': 'ChinaMobile',
    'x-network-type': 'WiFi',
    'x-api-version': '',
    'x-device-id': deviceId,
}

const appInstance = axios.create({
    baseURL: 'https://aipi.guanaitong.com/api/v1',
    headers: appHeaders,
})

appInstance.interceptors.request.use(config => {
    const requestId = uuid();
    config.headers['x-token'] = store.token || '';
    config.headers['x-request-id'] = requestId;
    config.headers['x-sign'] = md5(requestId);
    config.headers['x-ts'] = Date.now();
    return config
})

const webHeaders = {
    'User-Agent': 'GatApp/2.0.0 com.guanaitong/20000041 (Android 19; samsung/SM-G955N; WiFi)',
    'content-type': 'application/x-www-form-urlencoded',
};

const webInstence = axios.create({
    baseURL: 'https://g.guanaitong.com/',
    headers: webHeaders,
    transformRequest: [function _(data) {
        return qs.stringify(data)
    }]
})

webInstence.interceptors.request.use(config => {
    const token = store.token;
    if (!token) {
        return Promise.reject(new Error('no token'));
    }

    if (config.data && config.data.secret) {
        sign(config.data);
    }

    if (config.params && config.params.secret) {
        sign(config.params);
    }

    config.headers.Cookie = `x-device-id=${deviceId}; x-token=${token}`;
    return config
})

module.exports = {
    appInstance,
    webInstence,
}