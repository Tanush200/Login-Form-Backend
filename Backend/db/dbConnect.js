const mongoose = require("mongoose")
const mongoDB =async ()=>{
    try{
        await mongoose.connect('mongodb://localhost:27017/Auth')
        console.log('Connected MongoDb');
    }
    catch(error){
       console.log(error);
    }

}

module.exports = mongoDB