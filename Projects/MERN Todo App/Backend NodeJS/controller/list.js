const List = require('../model/list');

module.exports.insert = async(req, res) => {
    try {
        const result = await List.create(req.body);
        res.send({status: "success", data: result});
    } catch (error) {
        res.send({status: "error", message: error.message});
    }
};

module.exports.fetch = async(req, res) => {
    try {
        const result = await List.find({});
        res.send({status: "success", data: result});
    } catch (error) {
        res.send({status: "error", message: error.message});
    }
}

module.exports.update = async(req, res) => {
    try {
        const id = req.body._id;
        const result = await List.findById(id);
        result.value = req.body.value;
        const newResult = await result.save();
        res.send({status: "success", data: newResult});
    } catch (error) {
        res.send({status: "error", message: error.message});
    }
}

module.exports.remove = async(req, res) => {
    try {
        const result = await List.deleteOne(req.body);
        res.send({status: "success", data: result});
    } catch (error) {
        res.send({status: "error", message: error.message});
    }
}

