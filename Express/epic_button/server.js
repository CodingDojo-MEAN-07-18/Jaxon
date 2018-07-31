var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');
var session = require('express-session');
// create the express app
var app = express();

app.use(bodyParser.urlencoded());
// static content
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
const server = app.listen(8000); 
var io = require('socket.io')(server);
var times = 0;
io.sockets.on('connection',function(socket){
    socket.emit('greeting',{msg:'you are connected to a socket'})
    socket.emit('new_number',{times: times})
    socket.on('epic_button',function(){
        times += 1;
        socket.emit('new_number',{times: times})
    })
    socket.on('reset',function(){
        times = 0;
        socket.emit('new_number',{times: times})
    })
})

app.get('/',function(req,res){
    res.render('index')
})