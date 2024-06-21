const express = require('express');
const app = express();
app.use(express.json());
const mongoose = require('mongoose');
const userRouter = require('./router/user');

app.get('/', (req, res) => {
    res.send("Hello");
})
app.use('/user', userRouter);;

mongoose
    .connect("mongodb://127.0.0.1:27017")
    .then((success) => app.listen(4000))
    .catch((error) => console.log(error.message));