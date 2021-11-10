const jwt = require("jsonwebtoken");
exports.AuthorizeUser=async(req,res,next)=>
    {  
          let authtoken = req.headers["authtoken"];
           if(authtoken)
           {
            try{
                   req.user = jwt.verify(authtoken,process.env.JWTSECRET);
                
                   next();
              }
            catch(err)
            {
                res.status(401).send({error:"unauthorized"})
            }
           }
           else{
            res.status(401).send({error:"unauthorized"});
           }

    }
exports.isAdmin=async(req,res,next)=>{
    if(req.body.user.existUser.role=="Admin")
    next()  
    else
    res.status(403).send({msg:"You are not Admin"})
}
