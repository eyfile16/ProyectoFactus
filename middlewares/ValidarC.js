const { validationResult }=require("express-validator") ;

const ValidarC = (req, res, next)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json(errors)
    }
    next();
}

module.exports=ValidarC