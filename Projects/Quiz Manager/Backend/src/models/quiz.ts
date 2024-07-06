import mongoose from 'mongoose';
const schema = mongoose.Schema;
const quizSchema = new schema({
    name: {
        type: String,
        unique: true,
        index: true,
        required: true
    },
    questionsList: {
        type: [
            {
                questionNo: {
                    type: Number,
                    required: true,
                },
                question: {
                    type: String,
                    required: true
                },
                options: {
                    type: Object,
                    required: true
                }
            }
        ],
        required: true
    },
    answers: {
        type: Object,
    },
    isPublished: {
        type: Boolean,
        default: false
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        required: true
    }
}, {
    timestamps: true
});
const Quiz = mongoose.model('quiz', quizSchema);
export default Quiz;