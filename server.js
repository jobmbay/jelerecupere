//var http= require('http');
var express = require('express');
var app = express();

app
.get('/',function(req,res){
    res.sendFile(__dirname + '/redirect.html');
 });


app.listen(process.env.PORT, function () {
    console.log('The server is listening to the port 8080');
});