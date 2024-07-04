import { Request, Response } from "express";
import User from '../models/user';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
interface returnResponse{
    status: "success" | "error",
    message: String,
    data: {}
}

const registerUser = async (req: Request, res: Response) => {
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
        resp = {
            status: "error",
            message: "Something went wrong!",
            data: {}
        }
        console.log(error);
        res.status(500).send(resp);
    }
};

const fetchUser = async (req: Request, res: Response) => {
    let resp: returnResponse;
    try {
        const userId = req.params.userId;
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
        resp = {
            status: "error",
            message: "Something went wrong",
            data: {}
        }
        console.log(error);
        res.status(500).send(resp);
    }
};

const updateUser = async (req: Request, res: Response) => {
    let resp: returnResponse;
    try {
        const userId = req.body._id;
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
        console.log(error);
        resp = {
            status: "error",
            message: "Something went wrong",
            data: {}
        }
        console.log(error);
        res.status(500).send(resp);   
    }
};

const loginUser = async (req: Request, res: Response) => {
    let resp: returnResponse;
    try{
        const emailFromUser = req.body.email;
        const passwordFromUser = req.body.password;
        const responseFromDb = await User.findOne({email: emailFromUser});
        if(!responseFromDb) {
            resp = {
                status: "error",
                message: "Incorrect email or password!",
                data: {}
            }
            res.status(401).send(resp);
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
                resp = {
                    status: "error",
                    message: "Incorrect email or password!",
                    data: {}
                }
                res.status(401).send(resp);
            }
        }
    } catch(error) {
        resp = {
            status: "error",
            message: "Something went wrong!",
            data: {}
        }
        console.log(error);
        res.status(500).send(resp);
    }
};

export {registerUser, fetchUser, updateUser, loginUser};