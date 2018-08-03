const mongoose = require('mongoose'),
      Quote = mongoose.model('Quote');

module.exports = {
    index: function(request,response){
        response.render('index');
    },
    get: function(request,response){
        Quote.find({},['name','quote','createdAt'],{sort:{createdAt:-1}})
            .then(function(quotes){
                console.log(quotes);
                response.render('quotes',{quotes})
            })
            .catch(function(error){
                console.log(err);
            })
    },
    post: function(request,response){
        var new_quote = new Quote;
        new_quote.name = request.body.name;
        new_quote.quote = request.body.quote;
        new_quote.save()
                .then(function(saved){
                    response.redirect('/quotes')
                })
                .catch(function(error){
                    for(var key in error.errors){
                        request.flash('registration', error.errors[key].message);
                    }
                    // redirect the user to an appropriate route
                    response.redirect('/');
                })
    }

}