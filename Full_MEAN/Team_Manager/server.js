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
mongoose.connect('mongodb://localhost:27017/basic_db', { useNewUrlParser: true });
var PlayerSchema = new Schema({
    name: {
        type: String,
        required: [true,"Player must have a name"]
    },
    position: {
        type: String,
        default: "No Preference"
    },
    game1: {
        type: String,
        default: "Undecided"
    },
    game2: {
        type: String,
        default: "Undecided"
    },
    game3: {
        type: String,
        default: "Undecided"
    },

});
mongoose.model("Player", PlayerSchema);
var Player = mongoose.model("Player");

app.get('/api/players/list', function (request, response) {
    Player.find({})
        .then((players) => { response.json(players) })
        .catch((error) => { response.json(error) })
});
app.put('/api/players/list/:id/:num/:option', function (request, response) {
    Player.findOne({ _id: request.params.id })
        .then(player => {
            if (request.params.num == '1') {
                player.game1 = request.params.option;
            }
            if (request.params.num == '2') {
                player.game2 = request.params.option;
            }
            if (request.params.num == '3') {
                player.game3 = request.params.option;
            }
            player.save()
                console.log("In Save")
                .then((player) => { response.json(player) })
                .catch((error) => {response.json(error)})
        })
        .catch(error => response.json(error));
})

app.post('/api/players/list', function (request, response) {
    Player.create({name: request.body.name, position: request.body.position })
        .then((player) => { response.json(player) })
        .catch((error) => {response.json(error)})
});
app.delete('/api/players/:id', function (request, response) {
    Player.deleteOne({ _id: request.params.id })
        .then((player) => { response.json(player) })
        .catch((error) => {response.json(error)})
});
app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
});
app.listen(8000)