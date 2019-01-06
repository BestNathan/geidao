const store = require('../store');
const {log, user} = require('../model');
const {
    login,
    signSecret,
    signIn,
    earlybirdSecret,
    earlybirdPunch,
    earlybirdJoin,
} = require('../request');

async function cheat({username, password, verify_code}) {
    try {
        const loginRes = await login(username, password);

        if (!loginRes) {
            return;
        }

        // sign in
        const getSignInSecretRes = await signSecret()
        if (!getSignInSecretRes) {
            return;
        }

        const signInRes = await signIn();
        const signInLog = {
            username,
            content: signInRes,
            type: 'signIn',
        }
        await log.create([signInLog])

        // earlybird punch
        const getEarlybirdSecretRes = await earlybirdSecret();
        if (!getEarlybirdSecretRes) {
            return;
        }

        const earlybirdPunchRes = await earlybirdPunch();
        const punchLog = {
            username,
            content: earlybirdPunchRes,
            type: 'earlybirdPunch',
        }
        await log.create([punchLog])

        const earlybirdJoinRes = await earlybirdJoin(verify_code);
        const joinLog = {
            username,
            content: earlybirdJoinRes,
            type: 'earlybirdJoin',
        }
        await log.create([joinLog])
    } catch (error) {
        throw error
    } finally {
        Object.keys(store).forEach(key => {
            delete store[key];
        })
    }
}

function getUsers() {
    return user.find({enabled: true});
}

module.exports = {
    cheat,
    getUsers,
}