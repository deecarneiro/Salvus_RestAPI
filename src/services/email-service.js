'use strict';

const config = require('../config');
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(global.SENDGRID_KEY);

exports.send = async(to, subject, body) =>{
    const msg = {
        to: to, // Change to your recipient
        from: 'test@example.com', // Change to your verified sender
        subject: subject,
        text: body,
        html: global.EMAIL_TMPL,
      }
      sgMail
      .send(msg)
      .then(() => {
        console.log('Email sent')
      })
      .catch((error) => {
        console.error(error)
      })

};