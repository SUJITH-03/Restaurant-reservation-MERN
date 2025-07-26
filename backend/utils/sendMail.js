
import nodemailer from 'nodemailer';

export const sendTableBookingEmail = async ({ email, name, date, time }) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const mailOptions = {
    from: `"ROYAL FEAST RESTUARANT" <${process.env.SMTP_EMAIL}>`,
    to: email,
    subject: "✅ Table Booking Confirmed",
    html: `
      <h2>Hello ${name},</h2>
      <p>Thank you for your reservation!</p>
      <p><strong>Your Table Booking Details:</strong></p>
      <ul>
        <li><strong>Date:</strong> ${date}</li>
        <li><strong>Time:</strong> ${time}</li>
      </ul>
      <p>We look forward to welcoming you.</p>
      <br>
      <p>— Hotel Team</p>
    `,
  };

  await transporter.sendMail(mailOptions);
};
