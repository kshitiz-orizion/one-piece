var rect=require('./rectangle-2');
function solverect(l,b){
	console.log("solving for rectangle with l="+l+"b="+b);
	rect(l,b,function(err,rectangle){
		if(err){
			console.log(err);
		}
		else{
			console.log("the area of the rectangle with l="+l+"and b="+b+"is"+rectangle.area());
			console.log("the perimeter of the rectangle with l="+l+"and b="+b+"is"+rectangle.perimeter());
			
		}
	});
};
solverect(3,5);
solverect(2,4);
solverect(-3,5);