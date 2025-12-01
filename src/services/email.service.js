const nodemailer = require("nodemailer");
var config = require("../config/config");
var fs = require('fs');

class EmailService {
    constructor() {
        this.transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: config.email.port,
            secure: false,
            auth: {
                user: config.email.user,
                pass: config.email.password
            }
        });

    }


    
    async sendVerificationEmail(toEmail, uuid, firstName) {
        try {
            let htmlContent = fs.readFileSync("src/config/verificationEmail.html", 'utf8');
            
            const verificationLink = `https://yourdomain.com/verify?token=${uuid}`;

            htmlContent = htmlContent
                .replace('{{first_name}}', firstName)
                .replace('{{verification_link}}', verificationLink)

            const mailOptions = {
                from: config.email.user,
                to: toEmail,
                subject: "Verify Your Account on TimeBlock!",
                html: htmlContent
            };

            // Send the email
            const info = await this.transporter.sendMail(mailOptions);
            console.log(`Email sent to ${toEmail}: `, info.response);

        } catch (error) {
            console.error(`Error sending email to ${toEmail}: `, error);
        }
    }
}

module.exports = new EmailService();