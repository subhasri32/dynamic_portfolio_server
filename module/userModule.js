const User = require('../models/user');
const Joi = require('joi');

exports.postUser = async (req,res,next) => {
    const schema = Joi.object({
        name : Joi.string().min(3).max(25).required(),
        designation : Joi.string().min(3).max(50).required(),
        projectDetails : Joi.string().min(3).max(250).required(),
        educationDetails : Joi.string().min(5).max(250).required(),
    })

    var {error} = await schema.validate(req.body);
    if (error) {
        console.log(error)
        return res.status(400).send({msg : error.details[0].message}) 
    }

    const user = new User({
        name : req.body.name,
        designation : req.body.designation,
        projectDetails : req.body.projectDetails,
        educationDetails : req.body.educationDetails,
    })
    var response = await user.save();
    res.send(response);
}

exports.getUser = async (req,res,next) => {
    var response = await User.find();
    res.json(response)
}

exports.updateUser = async (req,res,next) => {
    const id = req.params.id;
    var response = await Product.findByIdAndUpdate(id,{
        userQuantity : req.body.userQuantity
    })
    res.send(response);
}
