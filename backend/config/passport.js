 const localStrategy = require('passport-local').Strategy;
 const mongoose = require('mongoose');
 const bcrypt = require('bcrypt');
 var User = require('../models/user');

 module.exports = function(passport){

     passport.use(
         new localStrategy({usernameField: "email"}, (email, password, done)=>{
            // Match user email
            User.findOne({email:email})
            .then(user =>{
                if(!user){     // these three parameters below are the argument for passport.authenticate
                    return done(null, false, {message: 'This email is not registered'})
                }
            // Match password
                bcrypt.compare(password, user.password, (err, isMatch)=>{
                    if(err) throw err;
                    
                    if(isMatch){
                        return done(null,true, user)
                    }else{
                        return done(null, false, {message: 'Password incorrect'})
                    }
                }) 
            })
            .catch(err=>console.log(err))
         })
     )

     passport.serializeUser((user, done)=>{
         done(null, user.id)
     });

     passport.deserializeUser((id, done)=>{
         User.findById(id, (err, user)=>{
             done(err, user);
         });
     });
 }