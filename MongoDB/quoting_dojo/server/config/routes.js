var quotes = require('../controllers/quotes')
module.exports = function(app){
    app.get('/',function(request,response){
        quotes.index(request,response);
    })
    app.post('/quotes',function(request,response){
        quotes.post(request,response);
    });
    
    app.get('/quotes',function(request,response){
        quotes.get(request,response);
    });
}