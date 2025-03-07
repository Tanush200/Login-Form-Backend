const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const User = new Schema({
    username:{
        type:String,
        required:true,
        unique:true

    },
    password:{
        type:String,
        required:true
    }
})

const userMoodel = mongoose.model('userMoodel',User);

module.exports = userMoodel;