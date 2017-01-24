var app=require('./dishes');

var hostname = 'localhost';
var port = 3000;





app.use(express.static(__dirname + '/public'));

app.listen(port, hostname, function(){
  console.log(`Server running at http://${hostname}:${port}/`);
});