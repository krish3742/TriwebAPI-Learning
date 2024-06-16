const db = require('../util/database');

module.exports.insert = (userData) => {
    let query = "Insert into `user`(`name`, `age`, `mobile_no`) values (?, ?, ?)";
    db.execute(query, [userData.name, userData.age, userData.mobile_no]);
    return true;
};