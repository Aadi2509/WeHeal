const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    username:{type: String,required:true},
    email:{type:String,required:true},
    password: {type:String,required:true},
    testsForThisUser:[{type:mongoose.Schema.Types.ObjectId,ref:"Test"}],
    tokens:[{
        token:{type:String}
    }]
});

//hashing the pasword
userSchema.pre('save', async function (next){
    if(this.isModified('password')){
        const hashedPassword = await bcrypt.hash(this.password,12);
        this.password=hashedPassword;
    }
    next();
})

//generating the tokens
userSchema.methods.generateAuthToken = async function(){
    try{
        let token = jwt.sign({_id:this._id},process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token:token});
        await this.save();
        return token;
    }catch(err){
        console.log(err);
    }
}

const User = mongoose.model('User',userSchema); 

module.exports= {User,userSchema};



