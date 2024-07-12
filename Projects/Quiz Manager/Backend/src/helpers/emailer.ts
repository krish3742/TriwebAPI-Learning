import nodemailer from 'nodemailer';
import ProjectError from './projectError';



const emailer = async (email: string, subject: string, text: string): Promise<any> => {
    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.email,
                pass: process.env.password
            }
        });
        const emailSent = await transporter.sendMail({
            from: process.env.email, 
            to: email,
            subject: subject,
            text: text
        });
    } catch (error) {
        const err = new ProjectError("Email not sent!");
        err.statusCode = 401;
        throw err;
    }  
};

export {emailer};