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
app.get('/cats/1',function(request,response){
  var data = {'name': 'CuddleBute', 'favorite_food': "Pizza", 'age': 3, "sleeping_spots":['couch','faces','on the keyboard'], 'img_url': "/images/cat_1.jpg" }
  response.render("details.ejs",{'data':data})
})
app.get('/cats/2',function(request,response){
  var data = {'name': 'Two Face', 'favorite_food': "Souls", 'age':666, "sleeping_spots":['ice','gravel','depths of hell'],'img_url': "/images/cat_2.png" }
  response.render("details.ejs",{'data':data})
})
app.get('/cats/3',function(request,response){
  var data = {'name': 'AntiFluff', 'favorite_food': "cat litter", 'age': 'unknown',"sleeping_spots":['upside down','in a jar','in the sink'], 'img_url': "/images/cat_3.jpeg" }
  response.render("details.ejs",{'data':data})
})

