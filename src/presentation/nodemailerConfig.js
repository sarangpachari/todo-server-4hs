const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
    },
});

const sendOtpMail = async (email, name, password) => {
    try {
        const mailOptions = {
            from: process.env.EMAIL,
            to: email,
            subject: "Welcome to MyToDo",
            text: `
Hi ${name},

🎉 Congratulations! Your registration on MyToDo was successful!

We are excited to welcome you aboard. Your account has been created, and you're now all set to start organizing your tasks efficiently.

📝 Next Steps:

Log in to your account using the following credentials:

Email: ${email}

Password: ${password}

Once logged in, you can create your first ToDo and begin your journey toward better productivity. 📋`
        };

        await transporter.sendMail(mailOptions);
        console.log(`✅ OTP sent to ${email}`);
    } catch (error) {
        console.error("Error sending OTP:", error);
    }
};
module.exports = { sendOtpMail };


