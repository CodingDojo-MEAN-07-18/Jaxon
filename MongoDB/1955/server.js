var express = require('express');
app = express();
var bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.json());
const JSON = require('circular-json');
var mongoose = require('mongoose');
const { Schema } = mongoose;
// This is how we connect to the mongodb database using mongoose -- "basic_mongoose" is the name of
//   our db in mongodb -- this should match the name of the db you are going to use for your project.
mongoose.connect('mongodb://localhost:27017/basic_db',{useNewUrlParser: true});
var FiftyFiveSchema = new Schema({
    name:{
        type: String,
        required: [true,"Name is required"],
    },
},{timestamps:true});
mongoose.model('FiftyFive', FiftyFiveSchema);
var FiftyFive = mongoose.model('FiftyFive');

app.get('/',function(reqest,response){
    FiftyFive.find({})
        .then((users)=> response.json(users))
        .catch((error) => console.log(error))
})
app.get('/new/:name',function(request,response){
    var user = new FiftyFive;
    user.name = request.params.name;
    user.save();
    response.redirect('/')
})
app.get('/remove/:name',function(request,response){
    FiftyFive.findOne({name:request.params.name})
        .then((user)=>{
            user.remove();
            response.redirect('/')
        })
        .catch((error) => console.log(error))
})
app.get('/:name',function(request,response){
    FiftyFive.findOne({name:request.params.name})
        .then((user) => response.json(user))
        .catch((error) => console.log(error))
})

app.listen(8000)