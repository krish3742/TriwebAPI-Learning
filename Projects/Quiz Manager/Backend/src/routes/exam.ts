import express from "express";
import { isAuthenticated } from "../middlewares/isAuthenticated";
import { startExam, finishExam } from "../controllers/exam";
import { isDeactivated } from "../middlewares/isDeactivated";
const router = express.Router();

//GET /exam/:quizId?
router.get('/:quizId?', isAuthenticated, isDeactivated, startExam);
//POST /exam
router.post('/', isAuthenticated, isDeactivated, finishExam);
export default router;