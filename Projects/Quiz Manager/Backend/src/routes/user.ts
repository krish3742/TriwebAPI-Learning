import express  from "express";
const router = express.Router();
import { registerUser, fetchUser, updateUser, loginUser } from "../controllers/user";
router.get('/:userId', fetchUser);
router.post("/", registerUser);
router.put("/", updateUser);
router.post("/login", loginUser);
export default router;
