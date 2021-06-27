const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", function(req, res){
  res.send("<h1>Hello</h1>");
});





app.listen(3000, function(){
  console.log('The server is running on: localhost 3000.');
});