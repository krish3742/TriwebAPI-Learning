import mongoose from "mongoose";
const schema = mongoose.Schema;
const userSchema = new schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    password: {
        type: String,
        required: true
    },
    activate: {
        type: Boolean,
        required: true,
        default: true
    },
    deactivate: {
        type: Boolean,
        required: true,
        default: false
    }
}, {
    timestamps: true
});
const User = mongoose.model('user', userSchema);
export default User;