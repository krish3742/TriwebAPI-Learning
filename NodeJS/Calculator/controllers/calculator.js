module.exports.add = (req, res) => {
    res.send(`Result = ${req.body.num1 + req.body.num2}`);
};

module.exports.subtract = (req, res) => {
    res.send(`Result = ${req.body.num1 - req.body.num2}`);
};

module.exports.multiply = (req, res) => {
    res.send(`Result = ${req.body.num1 * req.body.num2}`);
};

module.exports.division = (req, res) => {
    res.send(`Result = ${req.body.num1 / req.body.num2}`);
};

module.exports.remainder = (req, res) => {
    res.send(`Result = ${req.body.num1 % req.body.num2}`);
};