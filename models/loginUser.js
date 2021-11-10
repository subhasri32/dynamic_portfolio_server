const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const loginUserSchema= new Schema({
    username:{
	type: String,
	minLength:4,
	maxLength:25,
	required:true,
	},
	email:{
    type: String,
    minLength:4,
    maxLength:25,     
	requires:true,
	},
	name:{
	type:String,
    minLength:4,
	maxLength:50,
	required:true,
	},
	phone:{
	type:String,
    required:true,
	},
    address:{
        type:String,
        minLength:4,
        maxLength:50,
        required:true,    
    },
    password:{
        type:String,
        required:true,    
    },
    role:{
        type:String,
    }
});
const User = mongoose.model( 'loginUser' ,loginUserSchema,'loginuser' );
module.exports=User;
