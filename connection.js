exports.connect=()=>{
    try{
    const mongoose=require('mongoose');
    mongoose.connect('mongodb://localhost:27017/userdetails');
    }catch(err){
    console.log(err)
    process.exit()
    }
}