import express from 'express';
import { isAuthenticated } from '../middlewares/isAuthenticated';
import { activateAccount, deactivateAccount } from '../controllers/account';
const router = express.Router();

//GET /account/activate
router.get('/activate/:userId', isAuthenticated, activateAccount);
//GET /account/deactivate
router.get('/deactivate/:userId', isAuthenticated, deactivateAccount);

export default router;