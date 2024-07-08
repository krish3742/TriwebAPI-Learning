import nodemailer from 'nodemailer';
import ProjectError from './projectError';

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.email,
        pass: process.env.password
    }
});

const emailer = async (email: string) => {
    transporter.sendMail({
        from: "akshitij70@gmail.com", 
        to: email,
        subject: "Quiz app account reactivated!",
        html: '<h3>Hello</h3><p>Your quiz app account reactivated!</p>'
    }, function(error) {
        if(error) {
            const err = new ProjectError(error.message);
            throw err;
        } else {
            console.log("Mail sent!", email);
        }
    })
};

export {emailer};