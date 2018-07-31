var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');
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

io.sockets.on('connection',function(socket){
    socket.emit('greeting',{msg: "You are connected to a socket!!"})
    socket.on('posting_form', function(data){
        var random_number = Math.floor(Math.random()*1000 + 1);
        socket.emit('updated_message',{response: data});
        socket.emit('random_number',{response: random_number});
    });
})

app.get('/',function(req,res){
    res.render('index.ejs');
})
