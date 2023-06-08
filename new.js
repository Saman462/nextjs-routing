var express = require("express");
var app = express();
app.get("/", function (req, res) {
  var d = new Date();
  res.send("yay! <br/>Today's Date is <b>" + d + ".");
});
app.get("/meow", function (req, res) {
  res.send("i am meow hohohoho");
});
app.listen(3000);
