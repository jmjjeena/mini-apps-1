var express = require('express');
var bodyParser = require('body-parser');

// initialize our express app
var app = express();
var port = 7536;


var MongoClient = require('mongodb').MongoClient;
var db;

app.use(bodyParser.json());

MongoClient.connect('mongodb://127.0.0.1:27017/jmjdb' , function(err, database) {
    if(err) {
      throw err;
    }
    db = database.db('jmjdb');
    app.listen(port, () => console.log(`Listening on port ${port}`));
});


app.get('/', function(req, res) {
    db.collection("users").find({}).toArray(function(err, data) {
        if(data) {
            console.log(data);
            res.send(data);
        } else {
            res.end();
        }
    })
})

// app.post('/', function(req, res) {
//     db.coll
// })
