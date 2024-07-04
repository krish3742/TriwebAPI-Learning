import express  from "express";
const router = express.Router();
import { fetchUser, updateUser } from "../controllers/user";
import { isAuthenticated } from "../middlewares/isAuthenticated";

//GET /user/:userID
router.get('/:userId', isAuthenticated, fetchUser);
//PUT /user
router.put("/", isAuthenticated, updateUser);

export default router;
