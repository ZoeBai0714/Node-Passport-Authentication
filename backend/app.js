const express = require('express');
const app = express();
const port = process.env.port || 3000;
//connect to MongoDB
const mongoose = require('mongoose');
const db = require('./config/keys').MongoURI; 
mongoose.connect(db, {useNewUrlParser:true})
 .then(()=>console.log("MongoDB connected"))
 .catch(err=> console.log(err))
app.listen(port, console.log(`Listening to ${port}`));

//Bodyparser
app.use(express.urlencoded({extended:false}))

app.use('/', require('./routes/index'))
app.use('/users', require('./routes/users'))
