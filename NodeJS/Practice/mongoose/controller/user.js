const User = require('../model/user');

module.exports.addUser = async (req, res) => {
    const data = new User(req.body);
    const result = await data.save(); 
    res.send({status: "success", result});
};

module.exports.getUser = async (req, res) => {
    const data = await User.find(req.body, {uname: 1});
    res.send(data);
}