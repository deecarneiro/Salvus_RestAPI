'use strict';

const config = require('../config');
const sendgrid = require('sendgrid')(config.sendgrid);

exports.send = async(to, subject, body) =>{
    sendgrid.send({
        to: to,
        from: 'deecarneiro@testesalvus.me',
        subject: subject,
        body: body
    });
};