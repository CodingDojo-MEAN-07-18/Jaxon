var express = require('express');
app = express();
var bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.json());
var path = require('path');
// Setting our Static Folder Directory
app.use(express.static( __dirname + '/authors/dist/authors' ));
var mongoose = require('mongoose');
const { Schema } = mongoose;
// This is how we connect to the mongodb database using mongoose -- "basic_mongoose" is the name of
//   our db in mongodb -- this should match the name of the db you are going to use for your project.
mongoose.connect('mongodb://localhost:27017/basic_db', { useNewUrlParser: true });
var QuoteSchema = new Schema({
    content: {
        type: String,
        required: [true, "To add a quote it must have content."]
    },

}, {timestamps: true});
var AuthorSchema = new Schema({
    first_name: {
        type: String,
        required: [true, "A first name is required to create a new author"]
    },
    last_name: {
        type: String,
        required: [true, "A last name is required to create a new author"]
    },
    quotes: [QuoteSchema],
}, { timestamps: true });

mongoose.model('Quote', QuoteSchema);
var Quote = mongoose.model('Quote');
mongoose.model('Author',AuthorSchema);
var Author = mongoose.model('Author');

app.get('/api/authors', function (request, response) {
    Author.find({})
        .then((data) => { response.json(data) })
        .catch((error) => { response.json(error) })
});
app.get('/api/:id/edit', function (request, response) {
    Author.findOne({ _id: request.params.id })
        .then((data) => { response.json(data) })
        .catch((error) => { response.json(error) })
})
app.put('/api/:id/edit', function (request, response) {
    Author.findOne({ _id: request.params.id })
        .then((author) => {
            author.first_name = request.body.first_name;
            author.last_name = request.body.last_name;
            author.save()
                .then((author) => {
                    response.json(author)
                    console.log('All is good')
                })
                .catch((error) => {
                    return error;
                    console.log("uhoh")
                })
            })
        .catch((error) => {
            response.json(error)
        })

})
app.post('/api/authors', function (request, response) {
    Author.create({ 'first_name': request.body.first_name, 'last_name': request.body.last_name })
        .then((data) => { response.json(data) })
        .catch((error) => { response.json(error) })
})
app.delete('/api/:id/delete', function (request, response) {
    Author.remove({ _id: request.params.id })
        .then((data) => response.json(data))
        .catch((error) => { response.json(error) })
})

// app.get('/api/:id/view', function (request, response) {
//     Author.findOne({ _id: request.params.id })
//         .then((data) => response.json(data))
//         .catch((error) => { response.json(error) })
// })
// this route will be triggered if any of the routes above did not match
app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./authors/dist/authors/index.html"))
  });

app.listen(8000);
