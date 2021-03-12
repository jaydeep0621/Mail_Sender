const async = require("async");
const bodyparser = require("body-parser");
const sendMail = require("../utility/mail");
const Appconfig = require("../config/config.json");

module.exports = {

    //API TO COUNT MAIL
    count:async(req,res) => {
        const email = req.body.email;
        int count;
        while(1){
            const mail = await sendMail.sendMail({
            Appconfig.email
            email,
            "Count Mail",
            "Hello World"
        })
        count++;
    }
    console.log(this.count),
    res.json(count);
    }
}