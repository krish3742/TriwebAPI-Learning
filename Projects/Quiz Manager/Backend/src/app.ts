import express from "express";
import mongoose from "mongoose";
import { Request, Response, NextFunction } from 'express';
import userRouter from "./routes/user";
import authRouter from "./routes/auth";
import quizRouter from "./routes/quiz";
import examRouter from "./routes/exam";
import reportRouter from "./routes/report";
import accountRouter from './routes/account';
import ProjectError from "./helpers/projectError";
import { returnResponse } from "./utils/interfaces";

const app = express();
const connectionString = process.env.CONNECTION_STRING || "";

declare global {
    namespace Express {
        interface Request {
            userId: String;
        }
    }
};

app.use(express.json());
app.get("/", (req, res) => {
    res.send("You are in server");
});
app.use("/user", userRouter);
app.use('/auth', authRouter);
app.use('/quiz', quizRouter);
app.use('/exam', examRouter);
app.use('/report', reportRouter);
app.use('/account', accountRouter);
app.use((err: ProjectError, req: Request, res: Response, next: NextFunction) => {
    let message:string = "";
    let statusCode:number;
    let data:object | [] = {};
    let serverMessage:string;
    if(!!err.statusCode && err.statusCode < 500) {
        statusCode = err.statusCode;
        message = err.message;
    } else {
        serverMessage = err.message;
        if(serverMessage.includes("jwt expired")) {
            message = "Not authenticated!";
            statusCode = 401;
        } else if (serverMessage.includes("Cast to ObjectId failed")) {
            if(serverMessage.includes("quiz")) {
                message = "Quiz not found!";
            } else if(serverMessage.includes("report")) {
                message = "Report not found!";
            }
            statusCode = 404;
        } else {
            message = "Error! Please try after sometime!";
            statusCode = 500;
        }
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
