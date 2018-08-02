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
var {Schema} = mongoose;
// This is how we connect to the mongodb database using mongoose -- "basic_mongoose" is the name of
//   our db in mongodb -- this should match the name of the db you are going to use for your project.
mongoose.connect('mongodb://localhost:27017/basic_db',{useNewUrlParser: true});
var CommentSchema = new Schema({
    name: {
        type: String,
        required: [true,'A name is required to post a comment']
    },
    content:{
        type: String,
        required: [true, 'Content is required to post a comment']
    }
},{timestamps:true})
var PostSchema = new Schema({
    name:{
        type: String,
        required: [true, 'A name is required to create a Post']
    },
    content:{
        type: String,
        required: [true, "Content is required to create a Post"]
    },
    comments: [CommentSchema]
},{timestamps:true})
mongoose.model('Comment',CommentSchema);
var Comment = mongoose.model('Comment');
mongoose.model('Post',PostSchema);
var Post  = mongoose.model('Post');

app.get('/',function(request,response){
    Post.find({})
    .then((posts) => {
        response.render('index',{posts})
    })
    .catch((error) => {
        for(var key in error.errors){
            request.flash('validation', error.errors[key].message);
        }
        // redirect the user to an appropriate route
        response.render('index',{error})
    })
})

app.post('/post',function(request,response){
    var new_post = new Post;
    new_post.name = request.body.post_name;
    new_post.content = request.body.post_content;
    new_post.save()
        .then((post)=>{
            response.redirect('/')
        })
        .catch((error)=>{
            for(var key in error.errors){
                request.flash('validation', error.errors[key].message);
            }
            // redirect the user to an appropriate route
            response.redirect('/')
        })
})
app.post('/comment',function(request,response){
    var new_comment = new Comment;
    new_comment.name = request.body.comment_name;
    new_comment.content = request.body.comment_content;
    new_comment.save()
        .then((comment) =>{
            console.log(new_comment)
            Post.findOneAndUpdate({_id: request.body.post_id },{$push: {comments:comment}})
                .then((post)=>{
                    response.redirect('/')
                })
                .catch((error)=>{
                    for(var key in error.errors){
                        request.flash('validation', error.errors[key].message);
                    }
                    // redirect the user to an appropriate route
                    response.redirect('/',{error})
                })
        })
        .catch((error)=>{
            for(var key in error.errors){
                request.flash('validation', error.errors[key].message);
            }
            // redirect the user to an appropriate route
            response.redirect('/')
        })
})

app.listen(8000)