const nodemailer = require("nodemailer");
const Appconfig = require("../config/config");

function sendMail(from, to, subject, text) {
    const transporter = nodemailer.createTransport({
        service: Appconfig.service,
        auth:{
            user: Appconfig.email,
            password: Appconfig.password
        }
    })
    const mailoptions = {
        from,
        to,
        subject,
        text,
    }

return new Promise((resolve, reject)=>{
    transporter.sendMail(mailoptions, (error, info)=>{
        if(error){
            reject(error);
        }
        else{
            resolve(info);
        }
    })
})
}

module.exports = {
    sendMail
};