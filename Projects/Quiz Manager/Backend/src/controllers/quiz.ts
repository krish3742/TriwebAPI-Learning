import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";
import Quiz from "../models/quiz";
import ProjectError from "../helpers/projectError";
interface returnResponse{
    status: "success" | "error",
    message: String,
    data: {} | []
};

const createQuiz = async (req: Request, res: Response, next: NextFunction) => {
    let resp: returnResponse;
    try{
        const validationError = validationResult(req);
        if(!validationError.isEmpty()) {
            const err = new ProjectError("Validation Failed");
            err.statusCode = 422;
            err.data = validationError.array();
            throw err;
        }
        const createdBy = req.userId;
        const name = req.body.name;
        const questionsList = req.body.questionsList;
        const answers = req.body.answers;
        const quiz = await Quiz.create({name, questionsList, answers, createdBy});
        resp = {
            status: "success",
            message: "Quiz Created!",
            data: {
                quizId: quiz._id
            }
        }
        res.status(201).send(resp);
    }catch(error) {
        next(error);
    }
    
}

const fetchQuiz = async (req: Request, res: Response, next: NextFunction) => {
    let resp: returnResponse;
    try {
        const quizId = req.params.quizId;
        const quiz = await Quiz.findById(quizId, {name: 1, questionsList: 1, answers: 1, createdBy: 1});
        if(!quiz) {
            const err = new ProjectError("Quiz not found!");
            err.statusCode = 404;
            throw err;
        } else if(req.userId != quiz.createdBy) {
            const err = new ProjectError("You are not authorized!");
            err.statusCode = 403;
            throw err;
        }
        resp = {
            status: "success",
            message: "Quiz fetched!",
            data: {
                name: quiz.name,
                questionsList: quiz.questionsList,
                answers: quiz.answers
            }
        }
        res.send(resp);  
    } catch (error) {
        next(error);
    }
}

const updateQuiz = async (req: Request, res: Response, next: NextFunction) => {
    let resp: returnResponse;
    try {
        const validationError = validationResult(req);
        if(!validationError.isEmpty()) {
            const err = new ProjectError("Validation failed!");
            err.statusCode = 422;
            err.data = validationError.array();
            throw err;
        }
        const quizId = req.body._id;
        const quiz = await Quiz.findById(quizId);
        if(!quiz) {
            const err = new ProjectError("Quiz not found!");
            err.statusCode = 404;
            throw err;
        } else if(req.userId != quiz.createdBy) {
            const err = new ProjectError("You are not authorized!");
            err.statusCode = 403;
            throw err;
        } else if(quiz.isPublished) {
            const err = new ProjectError("Can't update published quiz!");
            err.statusCode = 405;
            throw err;
        }
        quiz.name = req.body.name;
        quiz.questionsList = req.body.questionsList;
        quiz.answers = req.body.answers;
        await quiz.save();
        resp = {
            status: "success",
            message: "Quiz updated!",
            data: {}
        }
        res.send(resp);
    } catch (error) {
        next(error);
    }
}

const deleteQuiz = async (req: Request, res: Response, next: NextFunction) => {
    let resp: returnResponse;
    try {
        const quizId = req.params.quizId;
        const result = await Quiz.findById(quizId);
        if(!result) {
            const err = new ProjectError("Quiz not found!");
            err.statusCode = 404;
            throw err;
        } else if(req.userId != result.createdBy) {
            const err = new ProjectError("You are not authorized!");
            err.statusCode = 403;
            throw err;
        } else if(result.isPublished) {
            const err = new ProjectError("Can't delete published quiz!");
            err.statusCode = 405;
            throw err;
        }
        await Quiz.deleteOne({_id: quizId});
        resp = {
            status: "success",
            message: "Quiz deleted!",
            data: {}
        }
        res.send(resp);
    } catch (error) {
        next(error);
    }
}

const publishQuiz = async (req: Request, res: Response, next: NextFunction) => {
    let resp: returnResponse;
    try {
        const quizId = req.body._id;
        const quiz = await Quiz.findById(quizId);
        if(!quiz) {
            const err = new ProjectError("Quiz not found!");
            err.statusCode = 404;
            throw err;
        } else if(req.userId != quiz.createdBy) {
            const err = new ProjectError("You are not authorized!");
            err.statusCode = 403;
            throw err;
        }
        quiz.isPublished = true;
        await quiz.save();
        resp = {
            status: "success",
            message: "Quiz published!",
            data: {}
        }
        res.send(resp);
    } catch (error) {
        next(error);
    }
}

const isQuizNameExists = async (name: String) => {
    const quiz = await Quiz.findOne({name});
    if(!!quiz) {
        return true;
    }
    return false;
}

export { createQuiz, fetchQuiz, updateQuiz, deleteQuiz, publishQuiz, isQuizNameExists };