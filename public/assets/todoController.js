var data = [{item: "find script"}, {item: "connect to database"}, {item: "get working without database"}];
// var mongoose = require("mongoose");
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});


// // connect to database
// mongoose.connect('mongodb+srv://test:test@cluster0-e3rjv.mongodb.net/test?retryWrites=true&w=majority');
//
// // create schema
// var todoSchema = mongoose.Schema({
//   item: String
// });
//
// var Todo = mongoose.model('Todo', todoSchema);

module.exports = function(app){
  // console.log("now running todoControllers get request");
  app.get("/todo", function(req, res){
        res.render("todo", {todos: data });
    });

    app.post("/todo", urlencodedParser, function(req, res){
      data.push(req.body);
      res.json(data);
    });

    app.delete("/todo/:item", function(req, res){
      data = data.filter(function(todo){
        var thing = todo.item;
        // format thing so it matches params
        thing = thing.trim();
        thing = thing.replace(/ /g, '-');
        thing = ":" + thing;
        // console.log(req.params.item + " param");
        // console.log(thing + " thing");

        return thing !== req.params.item;
        // return false;
      });
      res.json(data);
    });

};
