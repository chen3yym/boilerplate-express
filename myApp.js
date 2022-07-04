console.log('Hello World');

let express = require('express');
let app = express();

let path = '/';

app.get(path, function(req, res){
  // res.send('Hello Express');
  res.sendFile(__dirname + '/views/index.html');

  
});


































 module.exports = app;
