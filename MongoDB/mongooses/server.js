var express = require('express');
app = express();
var bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));
// Require path
var path = require('path');
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
app.set('views', __dirname + '/views'); //making files in views folder available for routing
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
var DuckSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'There are no nameless ducks, please provide a name'],
    },
    age:{
        type:Number,
        required:[true,'A duck cannot exist unless it has an age, please provide an age']
    },
    leader:{
        type:Boolean,
        default: false
    }
},{timestamps:true});
DuckSchema.virtual('date')
  .get(function() {
    return this.createdAt.toDateString();
    });
DuckSchema.virtual('hours')
    .get(function(){
        return this.createdAt.getHours();
    });
DuckSchema.virtual('minutes')
    .get(function(){
        return this.createdAt.getMinutes();
    });
mongoose.model('Duck', DuckSchema);
var Duck = mongoose.model('Duck')
// Use native promises
mongoose.Promise = global.Promise;

app.get('/',function(request,response){
	Duck.find({})
        .then((ducks)  => {
        response.render('index',{ducks})})
        .catch((error) => {
            for(var key in error.errors){
            request.flash('search', error.errors[key].message);
            }
        // redirect the user to an appropriate route
        response.render('index',{error})
        })
});

app.get('/ducks/new',function(request,response){
    response.render('new');
});
app.post('/ducks',function(request,response){
    var duck = new Duck;
    duck.name = request.body.name;
    duck.age = request.body.age;
    console.log(request.body.leader);
    if (request.body.leader == 'yes'){
        duck.leader = true;
    }
    duck.save()
        .then((duck) => {response.redirect('/')})
        .catch((error) => {
          console.log(error)
            for(var key in error.errors){
                request.flash('validation', error.errors[key].message);
                }
            // redirect the user to an appropriate route
            response.redirect('/ducks/new');
        })
})
app.get('/ducks/:id',function(request,response){
    Duck.findOne({_id: request.params.id})
      .then((duck) => {
          console.log(duck)
          response.render('profile',{duck});
      })
      .catch((error) =>{
            for(var key in error.errors){
                request.flash('search', error.errors[key].message);
                }
            // redirect the user to an appropriate route
            response.render('index',{error});
        })
});
app.get('/ducks/edit/:id',function(request,response){
    Duck.findOne({_id: request.params.id})
        .then((duck) => {
            response.render('edit',{duck});
        })
        .catch((error) =>{
            for(var key in error.errors){
                request.flash('search', error.errors[key].message);
                }
            // redirect the user to an appropriate route
            response.render('index',{error});
        })
})
app.post('/ducks/:id',function(request,response){
    Duck.findOne({_id: request.params.id})
        .then((duck) => {
          console.log('success')
          console.log(request.body.leader)
          duck.name = request.body.name;
          duck.age= request.body.age;
          if (request.body.leader == 'no'){
            duck.leader = false;
          }
          if (request.body.leader == 'yes'){
          duck.leader= true;
          }

          duck.save()
            .then((duck) => {
              response.redirect('/');
            })
            .catch((error) => {
              return error
            })

          })
        .catch((error) => {
            for(var key in error.errors){
                request.flash('search', error.errors[key].message);
                }
            // redirect the user to an appropriate route
            response.redirect('/ducks/edit/' + request.params.id);
        })
})
app.get('/ducks/destroy/:id',function(request,response){
  Duck.remove({_id: request.params.id})
    .then(response.redirect('/'))
    .catch((error) => {
        for(var key in error.errors){
            request.flash('search', error.errors[key].message);
            }
        // redirect the user to an appropriate route
        response.redirect('/ducks/' + request.params.id);
    })
})
app.listen(8000)
