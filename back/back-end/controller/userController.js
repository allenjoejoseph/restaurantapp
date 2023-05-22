const users = require('../models/userSchema')


// register user
exports.register = async (req,res)=>{
    // const{email, password} = req.body
    try{
        acc = await users.findOne({
            email:req.body.email
    })
    if(acc){
        alert('User already exists')
    }
    else{
        const newUser = new users({
            email:req.body.email,
            password:req.body.password
        })

        await newUser.save()
        res.status(200).json(`Account Created Successfully`)
    }
        
    }
    catch(err){
        res.status(401).json(err)
    }
}

//login

exports.login = async (req, res)=>{
    try{
        acc = await users.findOne({
            email:req.body.email,
            password:req.body.password
    })

    res.status(200).json({acc:acc})

    }catch(err){
        res.status(401).json(err)
    }
}
