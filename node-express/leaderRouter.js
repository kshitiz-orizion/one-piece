var express=require('express');
var morgan=require('morgan');
var bodyParser=require('body-parser');
var hostname='localhost';
var port=3000;
var app=express();
app.use(morgan('dev'));
var leaderRouter=express.Router();
leaderRouter.use(bodyParser.json());
leaderRouter.route('/')
.all(function(req,res,next){
	res.writeHead(200, { 'Content-Type':'text/plain'});
	next();
})
.get(function(req,res,next){
	res.end('will send all leaders to you');
})
.post(function(req,res,next){
	res.end('will add the leader='+req.body.name+'with details='+req.body.description);
})
.delete(function(req,res,next){
	res.end('deleting all the leaders');
});
leaderRouter.route('/:leaderId')
.all(function(req,res,next){
	res.writeHead(200,{'Content-Type':'text/plain'});
	next();
})
.get(function(req,res,next){
	res.end('will send the details of the leader:'+req.params.leaderId+'to you!');
})
.put(function(req,res,next){
	res.write('updating the leader:'+req.params.leaderId+'\n');
	res.end('will update the leader:'+req.body.name+'with details'+req.body.description);
})
.delete(function(req,res,next){
	res.end('deleting leader:'+req.params.leaderId);
});
app.use('/leader',leaderRouter);
app.use(express.static(__dirname + '/public'));

app.listen(port, hostname, function(){
  console.log(`Server running at http://${hostname}:${port}/`);
});