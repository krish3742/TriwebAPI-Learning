import express from 'express';
import { getReport, getAttemptedReports } from "../controllers/report";
import { isAuthenticated } from '../middlewares/isAuthenticated';
import { isDeactivated } from '../middlewares/isDeactivated';
const router = express.Router();

//GET /report/:reportId?
router.get('/:reportId?', isAuthenticated, isDeactivated, getReport);

//GET /report/admin/:quizId?
router.get('/admin/:quizId?', isAuthenticated, isDeactivated, getAttemptedReports);

export default router;