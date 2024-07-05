import { NextFunction, Request, Response } from "express";
import User from '../models/user';
interface returnResponse{
    status: "success" | "error",
    message: String,
    data: {}
}

const fetchUser = async (req: Request, res: Response, next: NextFunction) => {
    let resp: returnResponse;
    try {
        const userId = req.params.userId;
        if(req.userId != userId) {
            throw new Error("You are not authorized!");
        }
        const result = await User.findById(userId, {name: 1, email: 1});
        if(!result) {
            resp = {
                status: "error",
                message: "No user found!",
                data: {}
            };
            res.send(resp);
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
            throw new Error("You are not authorized!");
        }
        const result = await User.findById(userId, {name: 1, email: 1});
        if(!result) {
            resp = {
                status: "error",
                message: "No user found!",
                data: {}
            };
            res.send(resp);
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
                resp = {
                    status: "error",
                    message: "User data is same!",
                    data: {}
                };
                res.send(resp);
            }
        }  
    } catch (error) {
        next(error);  
    }
};

export { fetchUser, updateUser };