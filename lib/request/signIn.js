const {webInstence} = require('./base');
const store = require('../store');

const signUrl = '/sign_api/sign?';

module.exports = function signIn() {
    const data = {
        secret: store.signInSecret,
        signType: 'MD5',
    }

    return webInstence.get(signUrl, {params: data}).then(data => {
        console.log('sign in result: %j', data.data);
        return data.data;
    })
}