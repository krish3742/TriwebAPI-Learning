import { RequestHandler } from "express";
import User from '../models/user';
import ProjectError from '../helpers/projectError';
import { returnResponse } from "../utils/interfaces";
import bcrypt from 'bcryptjs';
import { validationResult } from "express-validator";

const fetchUser: RequestHandler = async (req, res, next) => {
    let resp: returnResponse;
    try {
        const userId = req.params.userId;
        if(req.userId != userId) {
            const err = new ProjectError("You are not authorized!");
            err.statusCode = 401;
            throw err;
        }
        const result = await User.findById(userId, {name: 1, email: 1});
        if(!result) {
            const err = new ProjectError("User not found!");
            err.statusCode = 404;
            throw err;
        } else {
            resp = {
                status: "success",
                message: "User fetched!",
                data: result
            };
            res.send(resp);
        }
    } catch (error) {
        next(error);
    }
};

const updateUser: RequestHandler = async (req, res, next) => {
    let resp: returnResponse;
    try {
        const userId = req.body._id;
        if(req.userId != userId) {
            const err = new ProjectError("You are not authorized!");
            err.statusCode = 401;
            throw err;
        }
        const result = await User.findById(userId, {name: 1, email: 1});
        if(!result) {
            const err = new ProjectError("User not found!");
            err.statusCode = 401;
            throw err;
        } else {
            if(result.name != req.body.name) {
                result.name = req.body.name;
                const newResult = await result.save();
                resp = {
                    status: "success",
                    message: "Data updated!",
                    data: newResult
                };
                res.send(resp);
            } else {
                const err = new ProjectError("User data is same!");
                err.statusCode = 409;
                throw err;
            }
        }  
    } catch (error) {
        next(error);  
    }
};

const changePassword: RequestHandler = async (req, res, next) => {
    let resp: returnResponse;
    try {
        const userId = req.body._id;
        const validationError = validationResult(req);
        if(!validationError.isEmpty()) {
            const err = new ProjectError("Validation Error!");
            err.statusCode = 422;
            err.data = validationError.array();
            throw err;
        }
        if(userId != req.userId) {
            const err = new ProjectError("You are not authorized!");
            err.statusCode = 403;
            throw err;
        }
        const user = await User.findById(userId);
        if(!user) {
            const err = new ProjectError("User not found!");
            err.statusCode = 401;
            throw err;
        }
        const currentPassword = req.body.currentPassword;
        const newPassword = req.body.newPassword;
        const newEncryptedPassword = await bcrypt.hash(newPassword, 12);
        const checkingPassword = await bcrypt.compare(currentPassword, user.password);
        if(!checkingPassword) {
            const err = new ProjectError("Current password is incorrect! Please try again...");
            err.statusCode = 401;
            throw err;
        }
        const checkingNewPassword = await bcrypt.compare(currentPassword, newEncryptedPassword);
        if(checkingNewPassword) {
            const err = new ProjectError("Current password is same as new password!");
            err.statusCode = 401;
            throw err;
        }
        user.password = newEncryptedPassword;
        await user.save();
        resp = {
            status: "success",
            message: "Password changed!",
            data: {}
        };
        res.send(resp);
    } catch (error) {
        next(error);
    }
};


export { fetchUser, updateUser, changePassword };