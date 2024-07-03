import { Request, Response } from "express";
import User from '../models/user';
interface returnResponse{
    status: "success" | "error",
    message: String,
    data: {}
}
const registerUser = async (req: Request, res: Response) => {
    let resp: returnResponse;
    try {
        const result = await User.create(req.body);
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
        res.status(500).send(resp);   
    }
};
export {registerUser, fetchUser, updateUser};