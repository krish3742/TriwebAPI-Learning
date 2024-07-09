import { RequestHandler } from "express";
import { validationResult } from "express-validator";
import ProjectError from "./projectError";

const validationRequest: RequestHandler = async (req, res, next) => {
    try {
        const validationError = validationResult(req);
        if(!validationError.isEmpty()) {
            const err = new ProjectError("Validation Error!");
            err.statusCode = 422;
            err.data = validationError.array();
            throw err;
        }
        next();
    } catch (error) {
        next(error);
    }
};

export {validationRequest};