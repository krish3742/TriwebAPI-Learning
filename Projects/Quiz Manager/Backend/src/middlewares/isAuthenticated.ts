import {Request, Response, NextFunction} from 'express';
import jwt from 'jsonwebtoken';

const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.get('Authorization');
    if(!authHeader) {
        throw new Error("Not authorized 1");
        // res.status(401).send(" authorized");
    }
    const token = authHeader.split(' ')[1];
    let decodeToken: {
        userId: String,
        iat: Number,
        exp: Number
    };
    try {
        decodeToken = <any>jwt.verify(token, "secretKey");
        req.userId = decodeToken.userId;
        next();
    } catch (error) {
        console.log(error);
        throw new Error("Not authorized 2");
    }
}

export {isAuthenticated};