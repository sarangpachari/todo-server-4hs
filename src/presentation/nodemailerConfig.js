const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
    },
});

const sendOtpMail = async (email, name) => {
    try {
        const mailOptions = {
            from: process.env.EMAIL,
            to: email,
            subject: "Welcome to MyToDo",
            text: `Hi ${name},
🎉 Your registration was successful!
Welcome aboard! Your account has been created, and you’re all set to start organizing your tasks like a pro.
📝 What’s next?
Log in to your account and create your first TODO. Start your journey toward better productivity today!`,
        };

        await transporter.sendMail(mailOptions);
        console.log(`✅ OTP sent to ${email}`);
    } catch (error) {
        console.error("Error sending OTP:", error);
    }
};
module.exports = { sendOtpMail };


