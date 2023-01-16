const isAuth = (req,res,next) =>{
    if(req.session.isAuth){
        console.log(req.session.isAuth)
        next();
    }else{
        console.log(req.session.isAuth)
        res.send("please login")
    }
}


module.exports = isAuth;