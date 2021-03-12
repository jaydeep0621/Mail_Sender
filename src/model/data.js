const mongoose = require("mongoose");

const count = new mongoose.Schema({
    token :{
        type:String
    }
})

module.exports = mongoose.model("count", count);