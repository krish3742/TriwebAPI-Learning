"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.fetchUser = exports.registerUser = void 0;
const user_1 = require("../model/user");
const registerUser = (req, res) => {
    let result = (0, user_1.insertUserToDB)(req.body);
    res.send(result);
};
exports.registerUser = registerUser;
const fetchUser = (req, res) => {
    let result = (0, user_1.findUserFromDB)(req.body);
    res.send(result);
};
exports.fetchUser = fetchUser;
const updateUser = (req, res) => {
    let result = (0, user_1.updateUserToDB)(req.body);
    res.send(result);
};
exports.updateUser = updateUser;
const deleteUser = (req, res) => {
    let result = (0, user_1.deleteUserFromDB)(req.body);
    res.send(result);
};
exports.deleteUser = deleteUser;
