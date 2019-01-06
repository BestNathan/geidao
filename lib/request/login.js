const {appInstance} = require('./base');
const {rsa} = require('../util');
const store = require('../store');

const loginUrl = '/passport/login';

module.exports = function login(username, password) {
    password = rsa(password);
    const data = {
        domain: '',
        login_name: username,
        password
    }

    return appInstance.post(loginUrl, data).then(data => {
        if (data.data.code == 0) {
            console.log('login success');
            store.token = data.data.data.access_token;
            return true;
        }

        return false;
    })
};
