const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
const userRouter = require('./routers/user');

app.use('/user', userRouter);
app.use('/', (req, res) => {
    res.send("Welcome");
});

app.listen(port);