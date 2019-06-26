const express = require('express');
const router = express.Router();
var User = require('../models/user');
const bcrypt = require('bcrypt');
const passport = require('passport');

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

router.post('/login', (req, res, next) =>{
    // console.log(req.body)
    passport.authenticate('local',(err,findUser,info)=>{
        if(findUser == false){
            res.send({msg:info.message})
        }else{
            res.send({msg:"You are now logged in"})
        }
    })(req, res, next);
})

module.exports = router;

/*
  passport.authenticate('local', function(err, user, info) {
    if (err) { return next(err); }
    if (!user) { return res.redirect('/login'); }
    req.logIn(user, function(err) {
      if (err) { return next(err); }
      return res.redirect('/users/' + user.username);
    });
  })(req, res, next);
*/


/*

    // passport.authenticate('local',{
    //     successRedirect: '/dashboard',
    //     failureRedirect:'/users/login'
    //     // failureFlash: true
    // })(req, res, next);
*/