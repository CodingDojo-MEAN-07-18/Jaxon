var express = require('express');
//create an express application
var app = express();
//require body-parser
var bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));
// Require path
var path = require('path');
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
app.set('views', path.resolve('views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');
//Allow for session 
const session = require('express-session');
app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }))  
//Allow for flash messages
const flash = require('express-flash');
app.use(flash());
// Require mongoose to interact with the MongoDB database
var mongoose = require('mongoose');
// This is how we connect to the mongodb database using mongoose -- "basic_mongoose" is the name of
//   our db in mongodb -- this should match the name of the db you are going to use for your project.
mongoose.connect('mongodb://localhost:27017/basic_db',{useNewUrlParser: true});
var QuoteSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'A name is required, otherwise select Skip To Quotes']
    },
    quote: {
        type: String,
        required: [true, 'A quote is required, otherwise select Skip To Quotes']
    }
    
},{timestamps: true});
QuoteSchema.virtual('date')
  .get(function() {
    return this.createdAt.toDateString();
    });
QuoteSchema.virtual('hours')
    .get(function(){
        return this.createdAt.getHours();
    });
QuoteSchema.virtual('minutes')
    .get(function(){
        return this.createdAt.getMinutes();
    });
mongoose.model('Quote', QuoteSchema);
var Quote = mongoose.model('Quote')
// Use native promises
mongoose.Promise = global.Promise;

app.get('/',function(request,response){
    response.render('index');
})
app.post('/quotes',function(request,response){
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
});

app.get('/quotes',function(request,response){
    Quote.find({},['name','quote','createdAt'],{sort:{createdAt:-1}})
        .then(function(quotes){
            console.log(quotes);
            response.render('quotes',{quotes})
        })
        .catch(function(error){
            console.log(err);
        })
    
});

app.listen(8000)