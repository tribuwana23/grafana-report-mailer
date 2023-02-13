const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
      user: process.env.EMAIL_SENDER ,
      pass: process.env.APP_PASSWORD ,
    },
  });


module.exports = {
    send: function(receiver_mail,fileName){
        transporter.sendMail({
            from: `${process.env.EMAIL_SENDER} <noreply.${process.env.EMAIL_SENDER}>`, // sender address
            replyTo: `noreply.${process.env.EMAIL_SENDER}` ,
            to: receiver_mail , // list of receivers
            subject: "testing", // Subject line
            text: "this is testing email", // plain text body
            html: "<b>This is Testing Mail!</b>", // html body
            attachments: [{
                filename: "Performance Report.pdf",
                path: fileName
            }]
          })
    }
  }