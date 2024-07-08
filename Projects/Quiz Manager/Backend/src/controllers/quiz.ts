import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";
import Quiz from "../models/quiz";
import ProjectError from "../helpers/projectError";
import { returnResponse } from "../utils/interfaces";

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
        const userId = req.userId;
        let quiz;
        if(!quizId) {
            quiz = await Quiz.find({createdBy: userId}, {name: 1, questionsList: 1, answers: 1});
            if(quiz.length == 0) {
                const err = new ProjectError("No quiz found!");
                err.statusCode = 404;
                throw err;
            }
        } else {
            quiz = await Quiz.findOne({_id: quizId, createdBy: userId}, {name: 1, questionsList: 1, answers: 1});
            if(!quiz) {
                const err = new ProjectError("Quiz not found!");
                err.statusCode = 404;
                throw err;
            }
        }
        resp = {
            status: "success",
            message: "Quiz fetched!",
            data: quiz
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
        } else if(quiz.isPublished) {
            const err = new ProjectError("Quiz already published!");
            err.statusCode = 409;
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