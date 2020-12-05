const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.get("/", function(req, res){
  res.send("It Works!!");
});

const port = process.env.PORT || 3000;

app.listen(port, function(){
  console.log("Server started on port 3000");
});
