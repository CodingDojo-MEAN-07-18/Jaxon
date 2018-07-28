var express = require("express");// invoke express and store the result in the variable app
var session = require('express-session');// invoking session
var app = express(); //creating the app
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

app.get('/',function(request,response){
    if (request.session.number == NaN){
        request.session.number = 0;
    }
    request.session.number += 1;
    response.render('index.ejs',{'number': request.session.number});
});
app.post('/twos',function(request,response){
    request.session.number += 1;
    response.redirect('/');
})

app.post('/clear',function(request,response){
    request.session.number = 0;
    response.redirect('/');
})

app.listen(8000);