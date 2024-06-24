"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const user_1 = require("../controller/user");
router.post('/register', user_1.registerUser);
router.post('/fetch', user_1.fetchUser);
router.post('/update', user_1.updateUser);
router.post('/delete', user_1.deleteUser);
exports.default = router;
