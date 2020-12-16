const express = require('express');
const router = express.Router();

router.get("/", function(req, res){
  res.render("index/welcome");
});

router.get("/dashboard", function(req,res){
  res.render("index/dashboard");
});

router.get("/about", function(req, res){
  res.render("index/about");
});

module.exports = router;
