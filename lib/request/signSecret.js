const {webInstence} = require('./base');
const store = require('../store');

const signSecretUrl = '/sign_api/get_key?'

module.exports = function signSecret() {
    return webInstence.get(signSecretUrl).then(data => {
        if (data.data.code == 0) {
            console.log('get sign in secret success: ', data.data.data.key);
            store.signInSecret = data.data.data.key
            return true;
        }

        return false;
    })
}