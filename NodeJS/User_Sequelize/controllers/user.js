const userModel = require('../models/user');

module.exports.register = async (req, res) => {
    let insertID = await userModel.insert(req.body);
    if(insertID) {
        res.send({status: "Success", data: {id: insertID}});
    } else {
        res.send({status: "Error", message: "User registration failed!"});
    }
};

module.exports.get = async (req, res) => {
    let userData = await userModel.fetch(req.body);
    if(userData) {
        res.send({status: "Success", data: userData});
    } else {
        res.send({status: "Error", message: "User not found!"});
    }
};

module.exports.update = async (req, res) => {
    let updateStatus = await userModel.update(req.body);
    if(updateStatus == 2) {
        res.send({status: "Success", message: "User updated!"});
    } else if(updateStatus == 1) {
        res.send({status: "Error", message: "User data is same"});
    } else {
        res.send({status: "Error", message: "User not found!"});
    }
};

module.exports.delete = async (req, res) => {
    let deleteStatus = await userModel.delete(req.body);
    if(deleteStatus) {
        res.send({status: "Success", message: "User deleted!"});
    } else {
        res.send({status: "Error", message: "User not found!"});
    }
};