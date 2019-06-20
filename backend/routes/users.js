const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');

router.get('/login', (req, res)=>res.send("Login"));

router.get('/register', (req, res)=>res.send("Register"));

router.post('/register', (req, res)=>{
    const {name, email, password, confirmPassword} = req.body
    let errors = {}
    
    //check all fields
    if(!name || !email || !password || !confirmPassword){
        errors["msg"] = "Please fill in all fields";
    }else if(password !== confirmPassword){
        errors["msg"] = "Passwords do not match";
    }else if(password.length < 6){
        errors["msg"] = "Password should be at least 6 characters"
    }else{
        errors["validation"] = "pass"
        //create a user
        User.findOne({email:email})
        .then(user => {
                if(user){
                 errors["msg"] = "Email is already registered"
                }else{
                 bcrypt.hash(password, 10, (err, hashedPassword) =>{
                    const newUser = new User({name:name, email:email, password:hashedPassword})
                    console.log(newUser)
                 })   
                 
                }
            }
        )
    }
    
   res.send(errors)
   
});

module.exports = router;