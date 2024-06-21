const dbFile = require('./dbFile');
const {loginSuccessful} = require('./login');
const {myEventEmitter, LOGIN_EVENT} = require('./eventFile');

myEventEmitter.on(LOGIN_EVENT, (userName) => {
    console.log("Sending email to user:", userName);
});

loginSuccessful("Krish");