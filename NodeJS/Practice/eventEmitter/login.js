const {myEventEmitter, LOGIN_EVENT} = require('./eventFile');

module.exports.loginSuccessful = (userName) => {
    myEventEmitter.emit(LOGIN_EVENT, userName);
};