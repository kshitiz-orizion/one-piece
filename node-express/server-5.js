
var express = require('express');
var dishes=require('./dishes.js');
var hostname = 'localhost';
var port = 3000;
var xyz = express();
xyz.use('/dishes',dishes);

xyz.listen(port, hostname, function(){
  console.log(`Server running at http://${hostname}:${port}/`);

});