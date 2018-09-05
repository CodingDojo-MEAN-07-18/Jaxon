var express = require('express');
app = express();
var bodyParser = require('body-parser');
var path = require('path');
port = process.env.PORT || 8000;
app
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .use(express.static(__dirname + '/public/dist/public'))
var mongoose = require('mongoose');
const { Schema } = mongoose;
mongoose.connect('mongodb://localhost:27017/basic_db', { useNewUrlParser: true });
var AccountSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    avatar_url: {
        type: String,
        required: true
    },
    public_repos: {
        type: Number,
        required: true
    },
    followers: {
        type: Number,
        required:true
    },
    score: Number
})
module.exports = mongoose.model("Acount", AccountSchema);
var Acount = mongoose.model("Acount");
app.listen(port, () => console.log(`Express listening on Port ${port}`));
app.get('/api/users', function (request, response) {
        Acount.find({}).sort({score:-1})
            .then(acounts => response.json(acounts))
            .catch(error => response.json(error))
})
app.get('/api/users/:username', function (request, response) {
    Acount.find({username:request.params.username})
        .then(acounts => response.json(acounts))
        .catch(error => response.json(error))
})
app.post('/api/users', function (request, response) {
    console.log(request.body);
    Acount.create({username:request.body.login, avatar_url: request.body.avatar_url, public_repos: request.body.public_repos, followers: request.body.followers, score: (request.body.followers + request.body.public_repos)*12})
        .then(acount => response.json(acount))
        .catch(error => {
                const errors = Object.keys(error.errors).map(key => error.error[key].message);
                response.status(500).json(errors);
        })
})
app.all("*", (request, response, next) => {
    response.sendFile(path.resolve(__dirname + "/public/dist/public/index.html"));

});

