const userModel = require('../models/user');

module.exports.register = async (req, res) => {
    try {
        let insertID = 0;
        let result = await userModel.create(req.body);
        insertID = result.dataValues.id;
        res.send({status: "Success", data: {id: insertID}});
    } catch (error) {
        res.send({status: "Error", message: "User registration failed!"});
    }
};

module.exports.get = async (req, res) => {
    try {
        let result = await userModel.findByPk(req.body.id);
        res.send({status: "Success", data: result});
    } catch (error) {
        res.send({status: "Error", message: "User not found!"});
    }
};

module.exports.update = async (req, res) => {
    try {
        let result = await userModel.findByPk(req.body.id);
        result.password = req.body.password;
        await result.save();
        res.send({status: "Success", message: "User updated!"});
    } catch (error) {
        res.send({status: "Error", message: "User not updated!"});
    }
};

module.exports.delete = async (req, res) => {
    try {
        let result = await userModel.findByPk(req.body.id);
        await result.destroy();
        res.send({status: "Success", message: "User deleted!"});
    } catch (error) {
        res.send({status: "Error", message: "User not deleted!"});
    }
};