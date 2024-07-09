import express  from "express";
import { body } from "express-validator";
import { registerUser, loginUser, isEmailExists } from "../controllers/auth";
import { isPasswordValid } from "../controllers/auth";
import { validationRequest } from "../helpers/validationRequest";
const router = express.Router();

//POST /auth
router.post("/", [
    body('name')
        .trim()
        .not()
        .isEmpty()
        .withMessage("Name is empty!"),
    body('email')
        .isEmail()
        .withMessage("Enter a valid email!")
        .normalizeEmail()
        .custom(async (email:String) => {
            return await isEmailExists(email)
                .then((status) => {
                    if(status) {
                        return Promise.reject("User already exists!")
                    }
                })
                .catch((error) => {
                    return Promise.reject(error);
                })
        }),
    body('password')
        .trim()
        .isLength({min: 8})
        .custom(async (newPassword: String) => {
            return isPasswordValid(newPassword)
                .then((status: Boolean) => {
                    if(!status) {
                        return Promise.reject("Enter a password having 8 character length, 1 small aplhabet, 1 capital aplhabet, 1 number, and 1 special character!");
                    }
                })
                .catch((err: any) => {
                    return Promise.reject(err);
                })
        }),
    body('confirm_password')
        .trim()
        .custom((confirm_password, {req}) => {
            if(confirm_password != req.body.password) {
                return Promise.reject("Confirm password mismatch!");
            }
            return true;
        })
], validationRequest, registerUser);
//POST /auth/login
router.post("/login", loginUser);

export default router;