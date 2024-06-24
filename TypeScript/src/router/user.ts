import express from 'express';
const router = express.Router();
import {registerUser, fetchUser, updateUser, deleteUser} from '../controller/user';
router.post('/register', registerUser);
router.post('/fetch', fetchUser);
router.post('/update', updateUser);
router.post('/delete', deleteUser);
export default router;