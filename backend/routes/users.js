const express = require('express');
const router = express.Router();

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
        errors["msg"] = "pass"
    }
    
   res.send(errors)
   
});

module.exports = router;