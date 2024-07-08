import { RequestHandler } from "express";
import { returnResponse } from "../utils/interfaces";
const activateAccount: RequestHandler = (req, res, next) => {
    let resp: returnResponse;
    try {
        res.send("Activated");
    } catch (error) {
        next(error);
    }
};

const deactivateAccount: RequestHandler = (req, res, next) => {
    res.send("Reactivated!");
};

export {activateAccount, deactivateAccount};
