const express = require("express");
var app = express();
var router = express.Router();
var port = 5000;

router.use(function (req, res, next) {
  console.log("Middleware called");
  next();
});
router.use(function (req, res, next) {
  res.send("Meow");
  next();
});
app.use("/user", router);
app.listen(5000);
