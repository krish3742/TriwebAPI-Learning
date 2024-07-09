import express  from "express";
const router = express.Router();
import { fetchUser, updateUser, changePassword } from "../controllers/user";
import { isAuthenticated } from "../middlewares/isAuthenticated";
import { isDeactivated} from '../middlewares/isDeactivated';
import { body } from "express-validator";

//GET /user/:userID
router.get('/:userId', isAuthenticated, isDeactivated, fetchUser);
//PUT /user
router.put("/", isAuthenticated, isDeactivated, updateUser);
//PUT /user/changepassword
router.put('/changepassword', isAuthenticated, isDeactivated, [
    body('confirmPassword')
        .trim()
        .custom((confirmPassword, {req}) => {
            if(req.body.newPassword !== confirmPassword) {
                return Promise.reject("Confirm password mismatch!")
            }
            return true;
        })
], changePassword);

export default router;
