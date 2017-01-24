var rect=require('./rectangle-1');
function solverect(l,b){
	console.log("solving for rectangle with length="+l+"and breadth="+b);
	if(l<0||b<0)
	{
		console.log("rectangle dimension should be greater than 0: l="+l+"b="+b);
	}
	else{
		console.log("the area of the rectangle with lenght="+ l +"breadth="+ b +" is "+ rect.area(l,b));
		console.log("the perimeter of the rectangle with lenght="+ l +"breadth="+ b +" is "+ rect.perimeter(l,b));
		
	}
}
solverect(2,4);
solverect(3,5);
solverect(-3,5);