import { NextFunction, Request, Response } from "express";
import User from '../models/user';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import ProjectError from "../helpers/projectError";
interface returnResponse{
    status: "success" | "error",
    message: String,
    data: {}
}

const registerUser = async (req: Request, res: Response, next: NextFunction) => {
    let resp: returnResponse;
    try {
        const name = req.body.name;
        const email = req.body.email;
        const passwordFromReq = req.body.password;
        const password = await bcrypt.hash(passwordFromReq, 12);
        const result = await User.create({name, email, password});
        resp = {
            status: "success",
            message: "Registration done!",
            data: {userId: result._id}
        }
        res.send(resp);
    } catch (error) {
        next(error);
    }
};

const loginUser = async (req: Request, res: Response, next: NextFunction) => {
    let resp: returnResponse;
    try{
        const emailFromUser = req.body.email;
        const passwordFromUser = req.body.password;
        const responseFromDb = await User.findOne({email: emailFromUser});
        if(!responseFromDb) {
            let err = new ProjectError("Credential mismatch!");
            err.statusCode = 401;
            throw err;
        } else {
            const passwordFromDb = responseFromDb.password;
            const passwordCheck = bcrypt.compareSync(passwordFromUser, passwordFromDb);
            if(passwordCheck) {
                const token = jwt.sign({userId: responseFromDb._id}, "secretKey", {expiresIn: "1h"});
                resp = {
                    status: "success",
                    message: "Logged In!",
                    data: {token}
                }
                res.send(resp);
            } else {
                let err = new ProjectError("Credential mismatch!");
                err.statusCode = 401;
                throw err;
            }
        }
    } catch(error) {
        next(error);
    }
};

export {registerUser, loginUser};