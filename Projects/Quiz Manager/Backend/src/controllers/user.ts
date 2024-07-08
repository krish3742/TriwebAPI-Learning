import { NextFunction, Request, Response } from "express";
import User from '../models/user';
import ProjectError from '../helpers/projectError';
import { returnResponse } from "../utils/interfaces";

const fetchUser = async (req: Request, res: Response, next: NextFunction) => {
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
            err.statusCode = 401;
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

const updateUser = async (req: Request, res: Response, next: NextFunction) => {
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

export { fetchUser, updateUser };