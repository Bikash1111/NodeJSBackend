const reqFilter =  (req,res,next) =>{
    if(!req.query.age){
            res.send("Please provide age")
    }else{
            next();
    }
}

module.exports = reqFilter;