import express  from "express";
const router = express.Router();
import { fetchUser, updateUser, changePassword } from "../controllers/user";
import { isAuthenticated } from "../middlewares/isAuthenticated";
import { isDeactivated} from '../middlewares/isDeactivated';
import { body } from "express-validator";
import { validationRequest } from "../helpers/validationRequest";
import { isPasswordValid } from "../controllers/auth";

//GET /user/:userID
router.get('/:userId', isAuthenticated, isDeactivated, fetchUser);
//PUT /user
router.put("/", isAuthenticated, isDeactivated, updateUser);
//PUT /user/changepassword
router.put('/changepassword', isAuthenticated, isDeactivated, [
    body('newPassword')
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
    body('confirmPassword')
        .trim()
        .custom((confirmPassword, {req}) => {
            if(req.body.newPassword !== confirmPassword) {
                return Promise.reject("Confirm password mismatch!")
            }
            return true;
        })
], validationRequest, changePassword);

export default router;
