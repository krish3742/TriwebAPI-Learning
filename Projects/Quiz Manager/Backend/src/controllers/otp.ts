import { emailer } from '../helpers/emailer';
import ProjectError from '../helpers/projectError';
import OTP from '../models/otp';
import User from '../models/user';
import optGenerator from 'otp-generator';

const sendEmailOtpRegister = async (email: string) => {
    try {
        const user = await User.findOne({email});
        if(user) {
            const err = new ProjectError("User already exists!");
            err.statusCode = 401;
            throw err; 
        }
        let otp = optGenerator.generate(6, {
            upperCaseAlphabets: false,
            lowerCaseAlphabets: false,
            specialChars: false
        });
        const checkOtp = await OTP.findOne({otp});
        while(checkOtp) {
            otp = optGenerator.generate(6, {
                upperCaseAlphabets: false,
                lowerCaseAlphabets: false,
                specialChars: false
            });
        }
        const emailResponse = await emailer(
            email,
            "Verification Registration OTP sent",
            `Registration otp is ${otp}`
        );
        const saveOtp = await OTP.create({email, otp});
        return true;
    } catch (error) {
        throw error;
    }
};

export { sendEmailOtpRegister }; 