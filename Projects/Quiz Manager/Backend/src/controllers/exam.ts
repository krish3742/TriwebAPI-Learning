import { Request, Response, NextFunction } from "express";
import Quiz from "../models/quiz";
import Report from "../models/report";
import ProjectError from "../helpers/projectError";

interface returnResponse{
    status: "success" | "error",
    message: String,
    data: {} | []
};

const startExam = async (req: Request, res: Response, next: NextFunction) => {
    let resp: returnResponse;
    try {
        const quizId = req.params.quizId;
        const quiz = await Quiz.findById(quizId, {name: 1, questionsList: 1, isPublished: 1});
        if(!quiz) {
            const err = new ProjectError("Quiz not found!");
            err.statusCode = 404;
            throw err;
        } else if(!quiz.isPublished) {
            const err = new ProjectError("Quiz is not published!");
            err.statusCode = 404;
            throw err;
        }
        resp = {
            status: "success",
            message: "Quiz fetched!",
            data: {
                name: quiz.name,
                questionsList: quiz.questionsList
            }
        }
        res.send(resp);
    } catch (error) {
        next(error);
    }
};

const finishExam = async (req: Request, res: Response, next: NextFunction) => {
    let resp: returnResponse;
    try {
        const quizId = req.body._id;
        const userId = req.userId;
        const attemptedQues = req.body.attemptedQues;
        const quiz = await Quiz.findById(quizId);
        if(!quiz) {
            const err = new ProjectError("Quiz not found!");
            err.statusCode = 404;
            throw err;
        } else if(!quiz.isPublished) {
            const err = new ProjectError("Quiz is not published!");
            err.statusCode = 404;
            throw err;
        }
        const answers = quiz.answers;
        const allQuestions = Object.keys(answers);
        const totalScore = allQuestions.length;
        let score = 0, result;
        if(!attemptedQues) {
            result = await Report.create({quizId, userId, attemptedQues, score, totalScore});
            resp = {
                "status": "success",
                "message": "Quiz attempted!",
                data: {_id: result._id, score, totalScore}
            }
            res.send(resp);
        }
        for(let i = 0; i < totalScore; i++) {
            let questionNumber = allQuestions[i];
            if(!!attemptedQues[questionNumber] && answers[questionNumber] == attemptedQues[questionNumber]) {
                score++;
            }
        }
        result = await Report.create({quizId, userId, attemptedQues, score, totalScore});
        resp = {
            "status": "success",
            "message": "Quiz attempted!",
            data: {_id: result._id, score, totalScore}
        }
        res.send(resp);
    } catch (error) {
        next(error);
    }
};

export {startExam, finishExam};