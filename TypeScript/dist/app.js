"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = __importDefault(require("./router/user"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/user', user_1.default);
app.get('/', (req, res) => {
    res.send("Hello from server");
});
app.listen(3002);
