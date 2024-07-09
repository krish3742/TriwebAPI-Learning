import express from 'express';
import { body } from 'express-validator';
import { createQuiz, fetchQuiz, updateQuiz, deleteQuiz, publishQuiz, isQuizNameExists } from '../controllers/quiz';
import { isAuthenticated } from '../middlewares/isAuthenticated';
import { isDeactivated } from '../middlewares/isDeactivated';
import { validationRequest } from '../helpers/validationRequest';
const router = express.Router();
//POST /quiz
router.post('/', isAuthenticated, isDeactivated, [
    body('name')
        .trim()
        .not()
        .isEmpty()
        .isLength({min: 10})
        .withMessage("Name must be 10 characters long!")
        .custom(async (name: String) => {
            return await isQuizNameExists(name)
                .then((status) => {
                    if(status) {
                        return Promise.reject("Quiz already exists!")
                    }
                })
                .catch((error) => {
                    return Promise.reject(error);
                })
        }),
    body('questionsList')
        .custom((question: []) => {
            if(question.length == 0) {
                return Promise.reject("Enter atleast 1 question!");
            }
            return true;
        }),
    body('answers')
        .custom((answer: {}) => {
            if(Object.keys(answer).length == 0) {
                return Promise.reject("Enter atleast 1 answer!");
            }
            return true;
        })
], validationRequest, createQuiz);

//GET /quiz/:quizId?
router.get("/:quizId?", isAuthenticated, isDeactivated, fetchQuiz);

//PUT /quiz
router.put('/', isAuthenticated, isDeactivated, [
    body('name')
        .trim()
        .not()
        .isEmpty()
        .isLength({min: 10})
        .withMessage("Name must be 10 character long!")
        .custom(async (name: String) => {
            return await isQuizNameExists(name)
                .then((status) => {
                    if(status) {
                        return Promise.reject("Quiz already exists!");
                    }
                })
                .catch((error) => {
                    return Promise.reject(error);
                })
        }),
    body('questionsList')
        .custom((question: []) => {
            if(question.length == 0) {
                return Promise.reject("Enter atleast 1 question!");
            }
            return true;
        }),
    body('answers')
        .custom((answer: {}) => {
            if(Object.keys(answer).length == 0) {
                return Promise.reject("Enter atleast 1 answer!");
            }
            return true;
        })
], validationRequest, updateQuiz);

//DELETE /quiz/:quizId
router.delete('/:quizId', isAuthenticated, isDeactivated, deleteQuiz);

//PATCH /quiz/publish
router.patch("/publish", isAuthenticated, isDeactivated, publishQuiz);

export default router;