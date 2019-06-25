const express = require('express');
const app = express();
const port = process.env.port || 3000;
const cors = require('cors');
const bodyParser = require('body-parser');
// const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
require('./config/passport')(passport);

//connect to MongoDB
const mongoose = require('mongoose');
const db = require('./config/keys').MongoURI; 
mongoose.connect(db, {useNewUrlParser:true})
 .then(()=>console.log("MongoDB connected"))
 .catch(err=> console.log(err))
app.listen(port, console.log(`Listening to ${port}`));


//Bodyparser
app.use(bodyParser.json());
app.use(cors());

 
//set sessions
app.use(session({
    secret: 'secret',
    resave:true,
    saveUninitialized:true
    })
);

//Passport middleware, initialize our local strategy
app.use(passport.initialize());
app.use(passport.session());

app.use('/', require('./routes/index'))
app.use('/users', require('./routes/users'))