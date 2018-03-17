
var dataset=[];
function retrieveData() {
	var mydataset=JSON.parse(data);
	

	for(var i=0; i< mydataset.length;i++){ 
		var currdata=[(mydataset[i].age)];	
		
	    dataset.push(currdata);	
	};
	
	drawChart();
	
}


function drawChart() {
	 var xAxis = d3.svg.axis();
	
	d3.select("body").selectAll("div")
	.data(dataset)
	.enter()
	.append("div")
	.attr("class","bar")
	.style("height",function(d){
	var barHeight=d*5;
	return barHeight+"px";
	
	});
}