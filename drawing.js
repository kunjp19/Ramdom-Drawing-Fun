function MyDraw(){
var svg = document.getElementById("MyDrawing");
height=300;
width=500;
circles= document.getElementById("Circles").value;
var colors   = ["aqua",  "black", "blue",  "fuchsia",
                 "green", "cyan",  "lime",  "maroon",
                 "navy",  "olive", "purple","red",
                 "silver",  "yellow","azure",
                 "gold",  "bisque","pink", "orange"];
for(let i=0;i<circles;i++)
{
circle= document.createElementNS("http://www.w3.org/2000/svg","circle");
circle.setAttribute('cx',(Math.random()*800)%width);
circle.setAttribute('cy',(Math.random()*800)%height);
circle.setAttribute('r',(Math.random()*800)%40);
color=colors[(Math.round(Math.random()*100))%colors.length];
console.log(color);
circle.setAttribute('fill',color);
//circle.setAttribute('fill-opacity',0.6);
svg.appendChild(circle);
}
}

function MySquare(){
var svg = document.getElementById("MyDrawing");
width=parseInt(svg.getAttribute("width"));
 var squares = document.getElementById("Squares").value;
 var colors   = ["aqua",  "black", "blue",  "fuchsia",
                 "green", "cyan",  "lime",  "maroon",
                 "navy",  "olive", "purple","red",
                 "silver",  "yellow","azure",
                 "gold",  "bisque","pink", "orange"];
for(let j=0;j<squares;j++)
{
var length = Math.random()*800%100;
square= document.createElementNS("http://www.w3.org/2000/svg","rect");
square.setAttribute('width',length);
square.setAttribute('height',length);
square.setAttribute('x',Math.random()*500%(width/0.2));
square.setAttribute('y',Math.random()*500%(width/0.2));
color=colors[(Math.round(Math.random()*100))%colors.length];
console.log(color);
square.setAttribute('fill',color);
//square.setAttribute('fill-opacity',0.6);
svg.appendChild(square);
}
}

function MyClear(){

  	 X = document.getElementById("MyDrawing");
  	 while (X.firstChild) {
    	X.removeChild(X.firstChild);
  }

}

function MyOpacity(){
 	var Y = document.getElementById("points").value;
	var svg = document.getElementById("MyDrawing");
	for(let k of svg.children)
	{
		k.setAttribute("fill-opacity",parseFloat(Y)/100);
	}

}
