import { RequestHandler } from "express";
import { returnResponse } from "../utils/interfaces";
import User from "../models/user";
import ProjectError from "../helpers/projectError";

const activateAccount: RequestHandler = async (req, res, next) => {
    let resp: returnResponse;
    try {
        const givenId = req.params.userId;
        const userId = req.userId;
        if(givenId !== userId) {
            const err = new ProjectError("You are not authorized");
            err.statusCode = 401;
            throw err;
        }
        const user = await User.findById(userId);
        if(!user) {
            const err = new ProjectError("User not found!");
            err.statusCode = 404;
            throw err;
        } else if(user.activate) {
            const err = new ProjectError("Account already activated!");
            err.statusCode = 409;
            throw err;
        }
        user.activate = true;
        user.deactivate = false;
        await user.save();
        resp = {
            status: "success",
            message: "Account reactivated!",
            data: {}
        }
        res.send(resp);
    } catch (error) {
        next(error);
    }
};

const deactivateAccount: RequestHandler = async (req, res, next) => {
    let resp: returnResponse;
    try {
        const givenId = req.params.userId;
        const userId = req.userId;
        if(userId !== givenId) {
            const err = new ProjectError("You are not authorized!");
            err.statusCode = 401;
            throw err;
        }
        const user = await User.findById(userId);
        if(!user) {
            const err = new ProjectError("User not found!");
            err.statusCode = 404;
            throw err;
        } else if(user.deactivate) {
            const err = new ProjectError("Account already deactivated!");
            err.statusCode = 409;
            throw err;
        }
        user.activate = false;
        user.deactivate = true;
        await user.save();
        resp = {
            status: "success",
            message: "Account deactivated!",
            data: {}
        }
        res.send(resp);
    } catch (error) {
        next(error);
    }
};

export {activateAccount, deactivateAccount};
