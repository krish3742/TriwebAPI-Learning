import express  from "express";
const router = express.Router();
import { registerUser, loginUser, isEmailExists } from "../controllers/auth";
import { body } from "express-validator";

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
        .withMessage("Enter atleast 8 characters password!"),
    body('confirm_password')
        .trim()
        .custom((confirm_password, {req}) => {
            if(confirm_password != req.body.password) {
                return Promise.reject("Confirm password mismatch!");
            }
            return true;
        })
], registerUser);
//POST /auth/login
router.post("/login", loginUser);

export default router;