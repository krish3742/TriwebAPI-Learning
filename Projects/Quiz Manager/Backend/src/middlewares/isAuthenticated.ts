import {Request, Response, NextFunction} from 'express';
import jwt from 'jsonwebtoken';

const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
    try {
        const authHeader = req.get('Authorization');
        if(!authHeader) {
            throw new Error("Not authorized 1");
            // res.status(401).send(" authorized");
        }
        const token = authHeader.split(' ')[1];
        let decodedToken: {
            userId: String,
            iat: Number,
            exp: Number
        };
        decodedToken = <any>jwt.verify(token, "secretKey");
        if(!decodedToken) {
            throw new Error("Not authorized 2");
        }
        req.userId = decodedToken.userId;
        next();
    } catch (error) {
        next(error);
    } 
}

export {isAuthenticated};