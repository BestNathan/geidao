const moment = require('moment');
const {webInstence} = require('./base');
const store = require('../store');

const earlybirdUrl = '/earlybird_api/punch';

module.exports = function earlybirdSecret() {
    const data = {
        secret: store.earlybirdSecret,
        signType: 'md5',
        code: moment().format('YYYYMMDD')
    }
    return webInstence.post(earlybirdUrl, data).then(data => {
        console.log('earlybird punch result: %j', data.data);
        return data.data;
    })
}