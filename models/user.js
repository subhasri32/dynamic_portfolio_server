const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const userSchema= new Schema({
    name:{
	type: String,
	minLength:3,
	maxLength:25,
	required:true,
	},
	designation:{
	type:String,
    minLength:3,
	maxLength:50,
	requires:true,
	},
	projectDetails:{
	type:String,
    minLength:3,
	maxLength:250,
	required:true,
	},
	educationDetails:{
	type:String,
	minLength:5,
	maxLength:250,
    required:true,
	},
})
const User = mongoose.model( 'User' ,userSchema,'user' );
module.exports=User;
