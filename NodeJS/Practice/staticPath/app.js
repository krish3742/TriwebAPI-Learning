const express = require('express');
const path = require('path');
const app = express();

app.use('/images', express.static(path.join(__dirname, "images")));
app.get('/', (req, res) => {
    res.send("Hello");
});

app.listen(3502);