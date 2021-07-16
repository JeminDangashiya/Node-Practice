var http = require('http');
var dt = require('./myfirstmodule');
var url = require('url');
var fs = require('fs')
var events = require('events')
var eventEmitter = new events.EventEmitter();

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   var q = url.parse(req.url, true).query;
//   var txt = q.year + " " + q.month;
//   res.write("The date and time is currently: " + dt.myDateTime());
//   res.end();
// }).listen(8080);

// http.createServer(function (req, res) {
//   var fileName = "info.html";
//   if (req.url != '/' && req.url != '/favicon.ico')
//     fileName = req.url.replace('/', '') + ".html";

//   fs.readFile(fileName, function (err, data) {
//     res.writeHead(200, {
//       'Content-Type': 'text/html'
//     });
//     res.write(data);
//     return res.end();
//   });
// }).listen(8080);

//Create an event handler:
var myEventHandler = () => {
  console.log('user online');
}

//Assign the event handler to an event:
eventEmitter.on('jaimin', myEventHandler);

http.createServer(function (req, res) {
  //Fire the 'scream' event:
  //eventEmitter.emit('jaimin');

  return res.end()
}).listen(8080);