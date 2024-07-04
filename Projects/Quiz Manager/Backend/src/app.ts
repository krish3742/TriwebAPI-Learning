import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/user";
import authRouter from "./routes/auth";

const app = express();
const connectionString = process.env.CONNECTION_STRING || "";

declare global {
    namespace Express {
        interface Request {
            userId: String;
        }
    }
}
app.use(express.json());
app.get("/", (req, res) => {
    res.send("You are in server");
});
app.use("/user", userRouter);
app.use('/auth', authRouter);
mongoose
    .connect(connectionString)
    .then((response) => {
        console.log("Server Connected!");
        app.listen(process.env.PORT);
    })
    .catch((error) => console.log(error));
