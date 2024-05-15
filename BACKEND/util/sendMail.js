const nodeMailer = require("nodemailer");
const sendEmail = async (options) => {
  const transport = nodeMailer.createTransport({
    service: "gmail",
    auth: {
      user: `${process.env.Email}`,
      pass: `${process.env.Password}`,
    },
  });
  const mailOptions = {
    from: `${process.env.Email}`,
    to: options.email,
    subject: options.subject,
    text: options.text, // Change this line from 'message' to 'text'
  };
  await transport.sendMail(mailOptions);
};
module.exports = sendEmail;
