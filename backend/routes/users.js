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
        res.send(errors)
    }else if(password !== confirmPassword){
        errors["msg"] = "Passwords do not match";
        res.send(errors)
    }else if(password.length < 6){
        errors["msg"] = "Password should be at least 6 characters"
        res.send(errors)
    }else{
        //create a user
        User.findOne({email:email})
        .then(user => {
                if(user){
                 errors["msg"] = "Email is already registered";
                }else{
                  errors["validation"] = "pass"   
                  bcrypt.hash(password, 10, (err, hashedPassword) =>{
                     if(err) throw err
                    const newUser = new User({name:name, email:email, password:hashedPassword})
                    newUser.save()
                     .then()
                     .catch(err => console.log(err))
                      console.log(newUser)
                      errors["msg"] = "pass"
                 })   
                 
                }
            }
        )
        .then(()=> res.send(errors))
        
     }
   
});

module.exports = router;