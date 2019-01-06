const {webInstence} = require('./base');
const store = require('../store');

const earlybirdUrl = '/earlybird_api/get_key';

module.exports = function earlybirdSecret() {
    return webInstence.get(earlybirdUrl).then(data => {
        if (data.data.code == 0) {
            console.log('get earlybird secret success: ', data.data.data.key);
            store.earlybirdSecret = data.data.data.key
            return true;
        }

        return false;
    })
}