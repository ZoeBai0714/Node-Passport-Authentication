const express = require('express');
const app = express();
const port = process.env.port || 3000;
const cors = require('cors');
const bodyParser = require('body-parser');
// const flash = require('connect-flash');
// const session = require('express-session');
 
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
app.use('/', require('./routes/index'))
app.use('/users', require('./routes/users'))

//set sessions
// app.use(session({
//     secret: 'secret',
//     resave:true,
//     saveUninitialized:true
// }))
// app.use(flash())
// app.use((req, res, next)=>{
//     res.locals.success_msg = req.flash('success_msg');
//     res.locals.err_msg = req.flash('err_msg');
//     next()
// })