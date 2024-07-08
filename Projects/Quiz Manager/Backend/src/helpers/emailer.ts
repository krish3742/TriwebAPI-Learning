import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.email,
        pass: process.env.password
    }
});

const emailer = (email: string) => {
    transporter.sendMail({
        from: "akshitij70@gmail.com", 
        to: email,
        subject: "Quiz app account reactivated!",
        html: '<h3>Hello</h3><p>Your quiz app account reactivated!</p>'
    })
};

export {emailer};