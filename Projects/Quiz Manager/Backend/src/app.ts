import express from "express";
import mongoose from "mongoose";

import userRouter from "./routes/user";

const app = express();
const connectionString = process.env.CONNECTION_STRING || "";

app.use(express.json());
app.get("/", (req, res) => {
    res.send("You are in server");
});
app.use("/user", userRouter);
mongoose
    .connect(connectionString)
    .then((response) => {
        console.log("Server Connected!");
        app.listen(process.env.PORT);
    })
    .catch((error) => console.log(error));
