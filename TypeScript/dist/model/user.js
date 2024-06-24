"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserFromDB = exports.updateUserToDB = exports.findUserFromDB = exports.insertUserToDB = void 0;
const insertUserToDB = (userData) => {
    let data = userData;
    return "User registered!";
};
exports.insertUserToDB = insertUserToDB;
const findUserFromDB = (userData) => {
    let data = userData;
    return "User found!";
};
exports.findUserFromDB = findUserFromDB;
const updateUserToDB = (userData) => {
    let data = userData;
    return "User updated!";
};
exports.updateUserToDB = updateUserToDB;
const deleteUserFromDB = (userData) => {
    let data = userData;
    return "User deleted!";
};
exports.deleteUserFromDB = deleteUserFromDB;
