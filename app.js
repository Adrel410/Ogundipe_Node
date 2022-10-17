//const express = require('express');
var express = require('express');
var app = express();

app.use('/static', express.static("staticFiles"));
app.set("view engine", "ejs")

app.get('/', function(req, res){
    res.send('Hello World');
})

app.get('/', function(req, res){
    res.render('todo.ejs');
})

app.listen(3000, function(){
    console.log('App listening on port 3000')
})