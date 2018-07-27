// Load the express module and store it in the variable express (Where do you think this comes from?)
var express = require("express");
// invoke express and store the result in the variable app
// this is the line that tells our server to use the "/static" folder for static content
var app = express();
// use app's get method and pass it the base route '/' and a callback
app.use(express.static(__dirname + "/static"));
// two underscores before dirname
// try printing out __dirname using console.log to see what it is and why we use it
// This sets the location where express will look for the ejs views
app.get('/', function(request, response) {
   response.send('/static/index.html');
});
app.listen(8000);