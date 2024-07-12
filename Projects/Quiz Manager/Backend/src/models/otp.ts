import mongoose from "mongoose";

const schema = mongoose.Schema;
const optSchema = new schema({
    email: {
        type: String,
        required: true
    },
    otp: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 120
    }
});

const OTP = mongoose.model('otp', optSchema);
export default OTP;