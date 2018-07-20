var http = require('http');
var fs = require('fs');
var server = http.createServer(function(request,response){
    //see what URLs the clients are requesting
    console.log('client request URL: ' + request.url);
    //Routing
    if (request.url === '/'){
        fs.readFile('./views/index.html','utf8',function(errors,contents){
            response.writeHead(200,{'Content-Type':'text/html'}); //send data about response
            response.write(contents); //send response body
            response.end(); //finished
          });
    }
    // All "cars" routes
    else if(request.url === '/cars'){
        fs.readFile('./views/cars.html','utf8',function(errors,contents){
            response.writeHead(200,{'Content-Type':'text/html'}); //send data about response
            response.write(contents); //send response body
            response.end(); //finished
          });
    
    }
    else if (request.url === '/cars/new'){
        fs.readFile('./views/cars_new.html','utf8',function(errors,contents){
            response.writeHead(200,{'Content-Type':'text/html'}); //send data about response
            response.write(contents); //send response body
            response.end(); //finished
          });
    }
    //All "cats" routes
    else if (request.url ==='/cats'){
        fs.readFile('./views/cats.html','utf8',function(errors,contents){
            response.writeHead(200,{'Content-Type':'text/html'}); //send data about response
            response.write(contents); //send response body
            response.end(); //finished
          });
    }
    //All image routes
    else if (request.url ==='/car1'){
        fs.readFile('./images/car_1.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if (request.url ==='/car2'){
        fs.readFile('./images/car_2.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url ==='/car3'){
        fs.readFile('./images/car_3.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url ==='/cat1'){
        fs.readFile('./images/cat_1.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url ==='/cat2'){
        fs.readFile('./images/cat_2.png', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/png'});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url ==='/cat3'){
        fs.readFile('./images/cat_3.jpeg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpeg'});
            response.write(contents);
            response.end();
        });
    }
    //all stylesheet routes
    else if(request.url === '/stylesheets/main.css'){
        fs.readFile('./stylesheets/main.css', 'utf8', function(errors, contents){
         response.writeHead(200, {'Content-type': 'text/css'});
         response.write(contents);
         response.end();
        });
      }
    else{
        response.writeHead(404);
        response.end('File not Found');
    }
});

server.listen(7077);
console.log('Server listening on localhost:7077')