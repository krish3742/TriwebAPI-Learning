const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ProductSchema = new Schema({
    pname: String,
    img: String,
    price: Number,
    description: String
});

module.exports = mongoose.model('product', ProductSchema);