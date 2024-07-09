import { RequestHandler } from "express";
import User from '../models/user';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import ProjectError from "../helpers/projectError";
import { validationResult } from "express-validator";
import { returnResponse } from "../utils/interfaces";
import { emailer } from "../helpers/emailer";

const registerUser: RequestHandler = async (req, res, next) => {
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

const loginUser: RequestHandler = async (req, res, next) => {
    let resp: returnResponse;
    try{
        const emailFromUser = req.body.email;
        const passwordFromUser = req.body.password;
        const responseFromDb = await User.findOne({email: emailFromUser});
        if(!responseFromDb) {
            let err = new ProjectError("Credentials mismatch!");
            err.statusCode = 401;
            throw err;
        } else {
            const passwordFromDb = responseFromDb.password;
            const passwordCheck = bcrypt.compareSync(passwordFromUser, passwordFromDb);
            if(passwordCheck) {
                const token = jwt.sign({userId: responseFromDb._id}, "secretKey", {expiresIn: "1h"});
                if(!responseFromDb.activate) {
                    emailer(responseFromDb.email);
                    responseFromDb.activate = true;
                    responseFromDb.deactivate = false;
                    await responseFromDb.save();
                }
                resp = {
                    status: "success",
                    message: "Logged In!",
                    data: {token}
                }
                res.send(resp);
            } else {
                let err = new ProjectError("Credentials mismatch!");
                err.statusCode = 401;
                throw err;
            }
        }
    } catch(error) {
        next(error);
    }
};

const isEmailExists = async (email:String) => {
    const user = await User.findOne({email});
    if(!!user){
        return true;
    }
    return false;
}

const isPasswordValid = async (password: String) => {
    if(!(password.indexOf('!') !== -1 ||
        password.indexOf('@') !== -1 ||
        password.indexOf('#') !== -1 ||
        password.indexOf('$') !== -1 ||
        password.indexOf('%') !== -1 ||
        password.indexOf('^') !== -1 ||
        password.indexOf('&') !== -1 ||
        password.indexOf('*') !== -1)
    ) {
        return false;
    }
    let flag = 0;
    for(let index = 0; index < password.length; index++) {
        let ch = password.charAt(index);
        if(ch >= 'a' && ch <= 'z') {
            flag = 1;
            break;
        }
    }
    if(!flag) {
        return false;
    }
    flag = 0;
    for(let index = 0; index < password.length; index++) {
        let ch = password.charAt(index);
        if(ch >= 'A' && ch <= 'Z') {
            flag = 1;
            break;
        }
    }
    if(!flag) {
        return false;
    }
    flag = 0;
    for(let index = 0; index < password.length; index++) {
        let ch = password.charAt(index);
        if(ch >= '0' && ch <= '9') {
            flag = 1;
            break;
        }
    }
    if(!flag) {
        return false;
    }
    return true;
};

export {registerUser, loginUser, isEmailExists, isPasswordValid};