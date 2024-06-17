const db = require('../util/database');

module.exports.insert = async (userData) => {
    let id = 0;
    try {
        let query = "Insert into `user`(`name`, `age`, `mobile_no`) values (?, ?, ?)";
        let result = await db.execute(query, [userData.name, userData.age, userData.mobile_no]);
        id = result[0].insertId;
    } catch (error) {
        console.log(error);
    }
    return id;
};

module.exports.fetch = async (userData) => {
    let data = '';
    try {
        let query = "Select * from `user` where `id`=?";
        let result = await db.execute(query, [userData.id]);
        data = result[0][0];
    } catch (error) {
        console.log(error);
    }
    return data;
};

module.exports.update = async (userData) => {
    let changed = 0, affected = 0, data;
    try {
        let query = "Update `user` Set `age`=? where `id`=?";
        let result = await db.execute(query, [userData.age, userData.id]);
        affected = result[0].affectedRows;
        changed = result[0].changedRows;
    } catch (error) {
        console.log(error);
    }
    if(affected == 0 && changed == 0) {
        data = 0;
    } else if(affected > 0 && changed == 0) {
        data = 1;
    } else if(affected > 0 && changed > 0) {
        data = 2;
    }
    return data;
};

module.exports.delete = async (userData) => {
    let data = 0;
    try {
        let query = "Delete from `user` where `id`=?";
        let result = await db.execute(query, [userData.id]);
        data = result[0].affectedRows;
    } catch (error) {
        console.log(error);
    }
    return data;
};