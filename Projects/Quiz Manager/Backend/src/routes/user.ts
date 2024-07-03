import express  from "express";
const router = express.Router();
import { registerUser, fetchUser, updateUser } from "../controllers/user";
router.get('/:userId', fetchUser);
router.post("/", registerUser);
router.put("/", updateUser);
export default router;
