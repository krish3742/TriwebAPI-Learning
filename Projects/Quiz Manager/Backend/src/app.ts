import express from "express";
import mongoose from "mongoose";
import { Request, Response, NextFunction } from 'express';
import userRouter from "./routes/user";
import authRouter from "./routes/auth";
import ProjectError from "./helpers/projectError";

const app = express();
const connectionString = process.env.CONNECTION_STRING || "";

declare global {
    namespace Express {
        interface Request {
            userId: String;
        }
        interface Error {
            statusCode: Number;
        }
    }
};

interface returnResponse{
    status: "success" | "error",
    message: String,
    data: {}
};

app.use(express.json());
app.get("/", (req, res) => {
    res.send("You are in server");
});
app.use("/user", userRouter);
app.use('/auth', authRouter);
app.use((err: ProjectError, req: Request, res: Response, next: NextFunction) => {
    let message:string;
    let statusCode:number;
    let data:object = {};
    if(!!err.statusCode && err.statusCode < 500) {
        statusCode = err.statusCode;
        message = err.message;
    } else {
        message = "Error! Please try after sometime!";
        statusCode = 500;
    }
    if(!!err.data) {
        data = err.data;
    }
    let resp:returnResponse = {
        status: "error",
        message,
        data
    }
    console.log(err);
    res.status(statusCode).send(resp);
});
mongoose
    .connect(connectionString)
    .then((response) => {
        console.log("Server Connected!");
        app.listen(process.env.PORT);
    })
    .catch((error) => console.log(error));
