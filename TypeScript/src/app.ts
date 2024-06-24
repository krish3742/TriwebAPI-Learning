import express from 'express';
import { Request, Response } from "express";
import userRouter from './router/user';
const app = express();
app.use(express.json());
app.use('/user', userRouter);
app.get('/', (req: Request, res: Response) => {
    res.send("Hello from server");
});
app.listen(3002);