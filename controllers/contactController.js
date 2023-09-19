const nodemailer = require("nodemailer");

// Tạo một transporter để gửi email
// test cái git
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "your-email@gmail.com",
    pass: "your-email-password",
  },
});

// Định nghĩa hàm để gửi email
const sendEmail = async () => {
    // Tạo một transporter để gửi email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "hieu31012002@gmail.com",
        pass: "minhhieu",
      },
    });
  
    // Định nghĩa thông tin email
    const mailOptions = {
      from: "hieu31012002@gmail.com",
      to: "20520183@gm.uit.edu.vn",
      subject: "test mail",
      text: "Đang test",
    };
  
    try {
      // Gửi email
      const info = await transporter.sendMail(mailOptions);
      console.log("Email sent:", info.response);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };


const contact = async(req, res) => {
    sendEmail();
    res.json('Thành công');
 
}
module.exports = {contact}