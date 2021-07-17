var express = require('express');
var app = express();
var es6Renderer = require('express-es6-template-engine')

// view engine setup
app.engine('html', es6Renderer);
app.set('views', 'components');
app.set('view engine', 'html');

app.get('/', function (req, res) {
    res.send('<a href="/registration">REGISTRATION</a> <a href="/login">LOGIN</a>');
})

app.get('/registration', function (req, res) {
    var arrayData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    res.render('registration', {
        locals: {
            title: 'Welcome!',
            data: arrayData
        }
    });
})

app.get('/login', function (req, res) {
    res.render('login');
    
})
app.get('/registration', function (req, res) {
    res.render('registration');
    
})
app.get('/forgetpass', function (req, res) {
    res.render('forgetpass');
    
})

app.get('/form', function (req, res) {
    res.sendFile(__dirname + '/' + "form.html");
})

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
})