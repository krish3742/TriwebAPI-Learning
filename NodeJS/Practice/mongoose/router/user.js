const userController = require('../controller/user');
const express = require('express');
const router = express.Router();

router.post('/add', userController.addUser);
router.post('/get', userController.getUser);

module.exports = router;