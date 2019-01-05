const axios = require('axios').default;
axios.defaults.validateStatus = status => status < 500
axios.get('https://aipi.guanaitong.com')
    .then(data => {
        console.log(data.data);
    })
    .catch(e => {
        console.log('error');
        console.log(e.response.data);
    })