import express from 'express';
import { getReport, getAttemptedReports } from "../controllers/report";
import { isAuthenticated } from '../middlewares/isAuthenticated';
const router = express.Router();

//GET /report/:reportId?
router.get('/:reportId?', isAuthenticated, getReport);

//GET /report/admin/:quizId?
router.get('/admin/:quizId?', isAuthenticated, getAttemptedReports);

export default router;