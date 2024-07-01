const express = require('express');
const app = express();
const mongoose = require('mongoose');
app.use(express.json());
const listRouter = require('./router/list');

app.get("/", (req, res) => {
    res.send("You are in server");
});

app.use("/list", listRouter);
mongoose
    .connect(process.env.connectionString)
    .then((success) => app.listen(process.env.PORT))
    .catch((error) => console.log(error.message));