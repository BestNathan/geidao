const {webInstence} = require('./base');
const store = require('../store');

const earlybirdUrl = '/earlybird_api/payment_verification';

module.exports = function earlybirdSecret(verify_code) {
    const data = {
        secret: store.earlybirdSecret,
        signType: 'md5',
        verify_mode: 3,
        verify_code,
    }
    return webInstence.post(earlybirdUrl, data).then(data => {
        console.log('earlybird join result: %j', data.data);
        return data.data;
    })
}