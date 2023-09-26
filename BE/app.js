require("dotenv").config();
const express = require("express");
const app = express();

const mongoose = require("mongoose");
mongoose.connect(process.env.DB_CONNECTION_STRING, { 
    useUnifiedTopology: true, 
    useNewUrlParser: true 
});

const session = require('express-session');
app.use(session({
    secret: 'privatePage',    
    saveUninitialized: false,
    resave: false
}))

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));  
app.use(express.static('public'));
app.use("/", require("./routes/login"));

app.listen(process.env.PORT);
