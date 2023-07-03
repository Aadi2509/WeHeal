const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{type: String,required:true},
    email:{type:String,required:true},
    password: {type:String,required:true},
    testsForThisUser:[{type:mongoose.Schema.Types.ObjectId,ref:"Test"}]
});

const User = mongoose.model('User',userSchema);

module.exports= {User,userSchema};