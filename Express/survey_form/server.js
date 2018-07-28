var express = require("express");// invoke express and store the result in the variable app
var session = require('express-session');// invoking session
var app = express(); //creating the app
// require body-parser
var bodyParser = require('body-parser');
// use it!
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(__dirname + "/static"));//making files in static folder available for routing
app.set('views', __dirname + '/views'); //making files in views folder available for routing
app.set('view engine', 'ejs'); //making ejs the routing manager
app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }))
//setting the session information

app.get('/',function(req,res){
    res.render('index.ejs');
})
app.post('/submit',function(req,res){
    req.session.data = req.body;
    console.log(req.session.data);
    res.redirect('/results');
})
app.get('/results',function(req,res){
    res.render('results.ejs',{'data': req.session.data});
})

app.listen(8000)