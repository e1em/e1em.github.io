//Delaunay Triangulation Background
//Extremely modified from http://bl.ocks.org/mbostock/4341156

(function(delaunay, $, undefined){ //http://stackoverflow.com/a/5947280
	var frameDelayMS = 250;
	var pointSpeed = 4;
	
	var points = 500; //default value
	var isMobile = true; //default value
	$(function(){
		isMobile = (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) //http://stackoverflow.com/a/3540295/1181387
			|| $(document).innerWidth() < 600);
		if(isMobile)console.log("Mobile device detected!");
		
		if(isMobile)
			points = 500; //It's not an animation, basically doesn't matter how many points
		else
			points = 150 + $(window).width()/5;
	});
	
	/*****Get the canvas image data*****/
	//http://stackoverflow.com/a/1041492/1181387
	var targetimg = new Image();
	targetimg.src = 'lh-big.png';
	targetimg.crossOrigin = "Anonymous";//http://stackoverflow.com/a/27840082/1181387
	
	var testcontext = document.getElementById('testcanvas').getContext('2d');
	var targetimgdata;
	
	$(targetimg).one("load", function(){ //need to wait for image to load (http://stackoverflow.com/a/3877079/1181387)
		testcontext.drawImage(targetimg, 0, 0);
		targetimgdata = testcontext.getImageData(0, 0, targetimg.width, targetimg.height).data;
			//this is a flat array: Pixel1 1 R, G, B, A, Pixel2 R, G, B, A, ...
		$(targetimg).remove();
		$("#testcanvas").remove();
	}).each(function(){
		if(this.complete)$(this).load();
	});
	
	
	/*****Initialize vertices, velocities, and SVG properties (width, height) ON LOAD.*****/
	var width, height, vertices, svg, vertexvels, path;
	$(function(){
		width = $(document).innerWidth();
		height = $(document).height();
		console.log("Initialized Delaunay triangulation with "+points+" vertices.");
		
		//Initialize vertices
		vertices = d3.range(points).map(function() {
		  var y = 0;
		  if(Math.random()< 0.1) //concentrate within the middle third, to have LexHack in more detail
			y = Math.random()*height;
		  else
			y = Math.random()*height/3 + height/3;
		  return [Math.random() * width, y];
		});
		
		//Make sure the whole thing is covered [corners]
		vertices[0] = [0,0];
		vertices[1] = [width,0];
		vertices[2] = [0,height];
		vertices[3] = [width,height];
		
		//Initialize velocities
		vertexvels = d3.range(points).map(function(){
			return [Math.random()*pointSpeed*2 - pointSpeed, Math.random()*pointSpeed*2 - pointSpeed];
		});
		
		svg = d3.select("body").append("svg")
			.attr("width", width)
			.attr("height", height)
			.attr("id", "delaunay");
		
		path = svg.append("g").selectAll("path");
	});
	
	
	/*****Drawing*****/
	delaunay.redraw = function() {
	  for(var i = 4; i < points; i++){
		if(vertices[i][1] > height/3 && vertices[i][1] < 2*height/3){ //slow down while in the detail zone
			vertices[i][0] = (vertices[i][0] + vertexvels[i][0]/7 + width) % width;
			vertices[i][1] = vertices[i][1] + vertexvels[i][1]/7; //won't be hitting y limits here
		}
		else{
			vertices[i][0] = (vertices[i][0] + vertexvels[i][0] + width) % width;
			vertices[i][1] = (vertices[i][1] + vertexvels[i][1] + height) % height;
		}
	  }
	  path = path.data(d3.geom.delaunay(vertices).map(function(d) {
		//Determine color of triangle
		var x = (d[0][0]+d[1][0]+d[2][0])/3;
		var y = (d[0][1]+d[1][1]+d[2][1])/3;
		
		x = Math.floor(x * targetimg.width/width);
		y = Math.floor(y * targetimg.height/height); //Scaled to the target image size
		
		var index = (x + y * targetimg.width)*4;
		
		//Return the vertices of the triangle
		return {data:"M" + d.join("L") + "Z", color:"rgb("+targetimgdata[index]+","+targetimgdata[index+1]+","+targetimgdata[index+2]+")"};
	  }), function(d){return d.data;});//I'm still not quite sure what this ordering function does.
	  path.exit().remove();
	  path.enter().append("path").attr("style",function(d){return "fill:"+d.color;}).attr("d", function(d){return d.data;});
	};
	
	
	/*****Resizing*****/
	function doResize(){
		var oldwidth = width, oldheight = height;
		svg.attr("width",0).attr("height",0);//make sure the svg doesn't count
		width = $(document).innerWidth();
		height = $(document).height();
		svg.attr("width", width)
			.attr("height", height);
		
		for(var i = 0; i < vertices.length; i++){
			vertices[i][0] *= width / oldwidth;
			vertices[i][1] *= height / oldheight;
		}
		vertices[0] = [0,0];
		vertices[1] = [width,0];
		vertices[2] = [0,height];
		vertices[3] = [width,height];
		
		delaunay.redraw();
	}
	
	//https://stackoverflow.com/questions/4298612/jquery-how-to-call-resize-event-only-once-its-finished-resizing
	var resizetimeout;
	$(window).resize(function() {
		clearTimeout(resizetimeout);
		resizetimeout = setTimeout(doResize,200); //Needs width, height, vertices, svg to be global.
	});
	
	
	/*****Stopping and Starting*****/
	var drawinterval;
	delaunay.start = function(){
		if(!isMobile) //Don't actually animate if it's mobile.
			drawinterval = setInterval(delaunay.redraw,frameDelayMS);
	};
	delaunay.pause = function(){
		clearInterval(drawinterval);
	};
	$(window).blur(function(){delaunay.pause();});
	$(window).focus(function(){delaunay.start();});
})(window.delaunay = window.delaunay || {}, jQuery);
