const nodemailer = require("nodemailer");

this.sendMail = function (to, subject, html) {

    var transporter = nodemailer.createTransport({
        name: "gezi.com.br",
        host: "mail.gezi.com.br",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: "contato@gezi.com.br", // generated ethereal user
            pass: "GeziApp@123" // generated ethereal password
        }
    });
    
    var mailOptions = {
        from: "contato@gezi.com.br", // sender address
        to: to, // list of receivers
        subject: subject, // Subject line
        //text: "Teste de email do site", // plain text body
        html: html // html body
    };    
    
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log("Email sent: " + info.response);
        }
    });

}
