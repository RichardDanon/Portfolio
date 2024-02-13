const dotenv = require('dotenv');
dotenv.config();

let nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars')
const path = require('path')

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USERNAME,
        pass: process.env.GMAIL_PASSWORD
    }
});

const handlebarOptions = {
    viewEngine: {
        partialsDir: path.resolve('./public/templates/'),
        defaultLayout: false
    },
    viewPath: path.resolve('./public/templates/')
};


transporter.use('compile', hbs(handlebarOptions))


const sendEmail = async (from, to, subject, template, context) => {

    console.log('sending email')
    console.log(process.env.GMAIL_USERNAME)
    console.log(process.env.GMAIL_PASSWORD)

    const mailOptions = {
        from: from,
        to: to,
        subject: subject,
        template: template,
        context: context
    };

    await transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}


module.exports = sendEmail;