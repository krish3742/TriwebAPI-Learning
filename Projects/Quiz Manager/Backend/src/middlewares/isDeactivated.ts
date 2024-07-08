import { RequestHandler } from "express"
import User from "../models/user";
import ProjectError from "../helpers/projectError";
const isDeactivated: RequestHandler = async (req, res, next) => {
    try {
        const userId = req.userId;
        const user = await User.findById(userId);
        if(!user) {
            const err = new ProjectError("User not found!");
            err.statusCode = 404;
            throw err;
        } else if(user.deactivate) {
            const err = new ProjectError("Account deactivated, please reactivate your account!");
            err.statusCode = 401;
            throw err;
        }
        next();
    } catch (error) {
        next(error);   
    }  
};

export {isDeactivated};