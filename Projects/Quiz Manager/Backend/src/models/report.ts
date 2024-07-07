import mongoose from "mongoose";
const schema = mongoose.Schema;
const reportSchema = new schema({
    "quizId": {
        type: mongoose.Types.ObjectId,
        required: true
    },
    "userId": {
        type: mongoose.Types.ObjectId,
        required: true
    },
    "attemptedQues": {
        type: Object,
        required: true
    },
    "score": {
        type: Number,
        required: true
    },
    "totalScore": {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});
const Report = mongoose.model('report', reportSchema);
export default Report;