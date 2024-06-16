const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello");
});

//Without routers and controllers
// app.post("/add", (req, res) => {
//     res.send(`Result = ${req.body.num1 + req.body.num2}`);
// });

// app.post("/subtract", (req, res) => {
//     res.send(`Result = ${req.body.num1 - req.body.num2}`);
// });

// app.post("/multiply", (req, res) => {
//     res.send(`Result = ${req.body.num1 * req.body.num2}`);
// });

// app.post("/division", (req, res) => {
//     res.send(`Result = ${req.body.num1 / req.body.num2}`);
// });

// app.post("/remainder", (req, res) => {
//     res.send(`Result = ${req.body.num1 % req.body.num2}`);
// });

//app.listen(port);

//With routers and controllers
const calculatorRouter = require('../User/routers/calculator');

app.use('/calculator', calculatorRouter);

app.listen(port);  