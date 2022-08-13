const mongoose = require('mongoose')

var schema = new mongoose.Schema({
   
    name : {
        type : String,
        required :true,
        uppercase:true
    },
    usn:{
        type : String,
        required: true,
        unique: true,
        uppercase:true
    },
    present:{
        type:Number,
        required:true

    },
  
})

const Userdb = mongoose.model('userdb',schema);
// const teacher_login = mongoose.model('teacher_login',schema);
module.exports = Userdb;
// module.exports = teacher_login;

