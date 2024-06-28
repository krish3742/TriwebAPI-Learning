const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const Product = require('./model/product');
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
    res.send("Hello");
});

app.post("/product", async (req, res) => {
    try {
        const result = await Product.create(req.body);
        res.send({status: "success"});
    } catch (error) {
        res.send({status: "error", message: error.message});
    }
});

app.get("/product", async (req, res) => {
    try {
        const result = await Product.find({});
        res.send({status: "success", data: result});
    } catch (error) {
        res.send({status: "error", message: error.message});
    }
});

mongoose
    .connect(process.env.connectionString)
    .then((success) => app.listen(process.env.PORT))
    .catch((err) => console.log(err));
