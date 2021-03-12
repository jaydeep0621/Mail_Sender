const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const mongo = process.env.DB_URI;

const option = {
    useNewUrlParser: true, 
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}

mongoose.connect(mongo,option)
.then(()=>{
    console.log("DB Successfully Connected");
}, (err)=>{
    console.log(err);
})