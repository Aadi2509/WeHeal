const mongoose = require('mongoose')

const testSchema = new mongoose.Schema({
    name:{type:String, required:true},
    age:{type:Number,required:true},
    gender:{type:String,required:true},
    phoneNumber:{type:Number,reuired:true},
    address:{type:String,required:true},
    date:{type:String,required:true},
    service:{type:Boolean},
    status:{type:String,required:true},
    tests:{type:Array}
});

const Test = mongoose.model('Test',testSchema);

module.exports= {Test,testSchema};