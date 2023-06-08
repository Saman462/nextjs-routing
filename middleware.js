const express = require("express");
var app = express();
var port = 5000;
// var hi = function (req, res, next) {
//   console.log("LOGGED");
//   // next();
// };
// app.use(hi);
app.use(function (req, res, next) {
  console.log("Start");
  next();
});
app.get("/", function (req, res, next) {
  res.send("Middle");
  next();
});
app.use("/", function (req, res) {
  console.log("End");
});
app.listen(5000);
