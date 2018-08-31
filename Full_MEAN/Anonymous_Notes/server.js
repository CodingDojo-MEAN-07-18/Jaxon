var express = require('express');
app = express();
var bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.json());
var path = require('path');
// Setting our Static Folder Directory
app.use(express.static( __dirname + '/notes/dist/notes' ));
var mongoose = require('mongoose');
const { Schema } = mongoose;
// This is how we connect to the mongodb database using mongoose -- "basic_mongoose" is the name of
//   our db in mongodb -- this should match the name of the db you are going to use for your project.
mongoose.connect('mongodb://localhost:27017/basic_db', { useNewUrlParser: true });
var NoteSchema = new Schema({
    content: {
        type: String,
        required: [true, "A note must contain contain with at least 3 characters."],
        minlength: 3,
    }
}, { timestamps: true });
mongoose.model("Note", NoteSchema);
var Note = mongoose.model('Note');

app.get('/api/notes', function (request, response) {
    Note.find({}).sort({createdAt: -1})
        .then((notes) => response.json(notes))
        .catch((error) => response.json(error))
})

app.post('/api/notes', function (request, response) {
    Note.create({ content: request.body.content })
        .then((note) => response.json(note))
        .catch((error) => response.json(error))
})
app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./notes/dist/notes/index.html"))
  });
app.listen(8000)