import express  from "express";
const router = express.Router();
import { fetchUser, updateUser } from "../controllers/user";

//GET /user/:userID
router.get('/:userId', fetchUser);
//PUT /user
router.put("/", updateUser);

export default router;
