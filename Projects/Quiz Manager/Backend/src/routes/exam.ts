import express from "express";
import { isAuthenticated } from "../middlewares/isAuthenticated";
import { startExam, finishExam } from "../controllers/exam";
const router = express.Router();

//GET /exam/:quizId?
router.get('/:quizId?', isAuthenticated, startExam);
//POST /exam
router.post('/', isAuthenticated, finishExam);
export default router;