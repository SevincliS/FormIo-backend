import nodemailer from "nodemailer";
const HOST = "smtp.yandex.com.tr";
const USER = "info@pukkatissue.com";
const PASS = "Pukka2020*";

const transporter = nodemailer.createTransport({
  host: HOST,
  port: 465,
  auth: {
    user: USER,
    pass: PASS,
  },
  secure: true,
});

const mailOptions = (to, subject, text, html, attachments) => {
  return {
    from: USER,
    to: to,
    subject: subject,
    text: text,
    html: html,
    attachments: attachments,
  };
};

export const sendMail = (to, subject, text, html, attachments) => {
  transporter.sendMail(
    mailOptions(to, subject, text, html, attachments),
    (error, info) => {
      if (error) console.log("Err", error);
      else console.log("Info", info.response);
    }
  );
};
