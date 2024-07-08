import express  from "express";
const router = express.Router();
import { fetchUser, updateUser } from "../controllers/user";
import { isAuthenticated } from "../middlewares/isAuthenticated";
import { isDeactivated} from '../middlewares/isDeactivated';

//GET /user/:userID
router.get('/:userId', isAuthenticated, isDeactivated, fetchUser);
//PUT /user
router.put("/", isAuthenticated, isDeactivated, updateUser);

export default router;
