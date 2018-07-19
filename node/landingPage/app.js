// Grabbing Http and FS modules
var http = require('http');
var fs = require('fs');
var server = http.createServer(function(request,response){
    //see what URLs the clients are requesting
    console.log('client request URL: ' + request.url);
    //Routing
    if(request.url === '/'){
      fs.readFile('index.html','utf8',function(errors,contents){
        response.writeHead(200,{'Content-Type':'text/html'}); //send data about response
        response.write(contents); //send response body
        response.end(); //finished
      });
    }
    else if (request.url === '/ninjas'){
      fs.readFile('ninjas.html','utf8',function(errors,contents){
        response.writeHead(200,{'Content-Type':'text/html'});
        response.write(contents);
        response.end();
      });
    }
    else if (request.url === '/dojo/new'){
      fs.readFile('dojo_new.html','utf8',function(errors,contents){
        response.writeHead(200,{'Content-Type':'text/html'});
        response.write(contents);
        response.end();
      });
    }
    else{
        response.writeHead(404);
        response.end('File not found');
    }
});
//Telling where the server to run
server.listen(6789);
//Showing in the terminal (server side)
console.log("Running in localhost: 6789");
