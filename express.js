var express = require('express');
var app = express();

app.get('/',function(req,res){
    res.send('<a href="/registration">REGISTRATION</a> <a href="/login">LOGIN</a>');
    res.send('');
})

app.get('/registration',function(req,res){
    res.sendFile(__dirname+'/'+"registration.html");
})
app.get('/login',function(req,res){
    res.sendFile(__dirname+'/'+"login.html");
})
app.get('/form',function(req,res){
    res.sendFile(__dirname+'/'+"form.html");
})
var server = app.listen(8081,function(){
    var host = server.address().address
    var port = server.address().port

    
})