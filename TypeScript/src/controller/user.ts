import { Request, Response } from "express";
import {insertUserToDB, findUserFromDB, updateUserToDB, deleteUserFromDB} from '../model/user';

const registerUser = (req: Request, res: Response) => {
    let result = insertUserToDB(req.body);
    res.send(result);
};

const fetchUser = (req: Request, res: Response) => {
    let result = findUserFromDB(req.body);
    res.send(result);
};

const updateUser = (req: Request, res: Response) => {
    let result = updateUserToDB(req.body);
    res.send(result);
};

const deleteUser = (req: Request, res: Response) => {
    let result = deleteUserFromDB(req.body);
    res.send(result);
};

export {registerUser, fetchUser, updateUser, deleteUser};