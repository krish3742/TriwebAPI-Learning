import {Request, Response, NextFunction} from 'express';
import jwt from 'jsonwebtoken';
import ProjectError from '../helpers/projectError';

const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
    try {
        const authHeader = req.get('Authorization');
        if(!authHeader) {
            const err = new ProjectError("Not authenticated!");
            err.statusCode = 401;
            throw err;
        }
        const token = authHeader.split(' ')[1];
        let decodedToken: {
            userId: String,
            iat: Number,
            exp: Number
        };
        decodedToken = <any>jwt.verify(token, "secretKey");
        if(!decodedToken) {
            const err = new ProjectError("Not authenticated!");
            err.statusCode = 401;
            throw err;
        }
        req.userId = decodedToken.userId;
        next();
    } catch (error) {
        next(error);
    } 
}

export {isAuthenticated};