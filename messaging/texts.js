'use strict';
const nodemailer = require('nodemailer');

// Generate test SMTP service account from ethereal.email
// Only needed if you don't have a real mail account for testing
var texts= function(reciever,message){
    var locationsSent=reciever+"@txt.att.net,"+reciever+"@tmomail.net,"+reciever+"@vtext.com,"+reciever+"@messaging.sprintpcs.com,"+reciever
    
nodemailer.createTestAccount((err, account) => {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'financeapp2590@gmail.com', // generated ethereal user
            pass: 'Jellybean759&' // generated ethereal password
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Financial planner team" <financeapp2590@gmail.com>', // sender address
        to: locationsSent, // list of receivers
       // subject: 'Hello ✔', // Subject line
        text: message, // plain text body
        //html: '<b>Hello world?</b>' // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });
});
}
module.exports=texts