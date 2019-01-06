const {redis, geidao} = require('./lib/service');
const hub = require('./lib/hub');

async function main() {
    const users = await geidao.getUsers();
    console.log('users length: ', users.length);

    for (const user of users) {
        await geidao.cheat(user)
        console.log('%s done', user.username);
    }

    await redis.setTomorrowKey();
}

main();

hub.on('run', main)