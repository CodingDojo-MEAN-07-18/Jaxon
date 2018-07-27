// Load the express module and store it in the variable express (Where do you think this comes from?)
var express = require("express");
// invoke express and store the result in the variable app
// this is the line that tells our server to use the "/static" folder for static content
var app = express();
// use app's get method and pass it the base route '/' and a callback
app.use(express.static(__dirname + "/static"));

app.set('views', __dirname + '/views');

app.set('view engine', 'ejs');

app.get('/cars',function(request,response){
  response.render('cars.ejs');
})
app.get('/cats',function(request,response){
  response.render('cats.ejs');
})
app.get('/form',function(request,response){
  response.render('form.ejs');
})
app.listen(8000);
