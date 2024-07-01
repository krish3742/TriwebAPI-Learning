const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const listSchema = new Schema({
    value: String
});

const List = mongoose.model("ToDo_List", listSchema);

module.exports = List;