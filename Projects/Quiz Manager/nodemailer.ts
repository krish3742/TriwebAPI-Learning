// import nodemailer from 'nodemailer';
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "akshitij70@gmail.com",
        pass: "seqgzbyeuwmzzmdq"
    }
});

const mailOptions = {
    from: "akshitij70@gmail.com",
    to: "krish3742@gmail.com",
    subject: "Quiz app account reactivated!",
    html: '<h1>Hello<h1'
};

transporter.sendMail(mailOptions, function(error, info) {
    if(error) {
        console.log(error);
    } else {
        console.log("Mail sent!", info.response);
    }
});