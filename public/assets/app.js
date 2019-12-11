var express = require("express");
var http = require("http");
var fs = require("fs");

var app = express();

var todoController = require("./todoController");

// setup template engine
app.set('view engine', 'ejs');

// static files
app.use(express.static('public'));

app.use("/maybe", express.static(__dirname + "/maybe"))
// app.use("/assets", express.static("./public/assets"));

// var server = http.createServer(function(req, res){
//     console.log("request made" + req.url);
//     if(req.url === "/home") {
//         // fs.createReadStream(__dirname + "/public/assets/").pipe(res);
//         console.log("server is a success");
//     }
// });

// listen to port
app.listen(3000);
console.log("you are listening to port 3000");

// fire controllers
todoController(app);
