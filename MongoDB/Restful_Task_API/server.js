var express = require('express');
app = express();
var bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.json());
var path = require('path');
// Setting our Static Folder Directory
app.use(express.static( __dirname + '/public/dist/public' ));
var mongoose = require('mongoose');
const { Schema } = mongoose;
// This is how we connect to the mongodb database using mongoose -- "basic_mongoose" is the name of
//   our db in mongodb -- this should match the name of the db you are going to use for your project.
mongoose.connect('mongodb://localhost:27017/basic_db',{useNewUrlParser: true});
var TaskSchema = new Schema({
    title:{
        type: String,
        required: [true,"A Task must have a title"],
    },
    description:{
        type:String,
        default: '',
    },
    completed:{
        type: Boolean,
        default: false
    }
},{timestamps:true});
mongoose.model('Task',TaskSchema);
var Task = mongoose.model('Task');
app.get('/',function(request,response){
    response.render('index.html')
})
app.get('/tasks',function(request,response){
    Task.find({})
        .then((tasks)=>response.json(tasks))
        .catch((errors)=>response.json(errors))
})

app.get('/tasks/:id',function(request,response){
    Task.findOne({_id:request.params.id})
        .then((task) => response.json(task))
        .catch((error) => response.json(error))

})

app.post('/tasks',function(request,response){
    Task.create(request.body)
        .then((task)=>{
            console.log("Success!");
            console.log(task);
            response.json(task);
        })
        .catch((error)=>{
            console.log("Failed to Create new Task")
            console.log(error);
            response.json(error);
        })
})

app.put('/tasks/:id',function(request,response){
    Task.findOne({_id: request.params.id})
        .then((task)=>{
            console.log("Success in Updating");
            task.title = request.body.title;
            task.description = request.body.description;
            task.completed = request.body.completed;
            task.save()
                .then((task)=>response.json(task))
                .catch((error)=>{
                    console.log(error);
                    response.json(error);
                })
        })
        .catch((error)=>{
            console.log(error);
            response.json(error);
        })

})

app.delete('/tasks/:id',function(request,response){
    Task.findOne({_id:request.params.id})
        .then((task)=>{
            console.log("Success in Deletion")
            task.remove()
            response.json(task)
        })
        .catch((error)=>{
            console.log(error);
            response.json(error)
        })
})

app.listen(8000);