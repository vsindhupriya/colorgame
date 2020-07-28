var num = 6;
var colors = generaterandomcolors(num);
var squares = document.querySelectorAll(".square");
var pickedcolor = pickcolor();
var colordisplay = document.querySelector("#colordisplay");
var messagedisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetbutton =  document.querySelector("#reset");
var easybtn = document.querySelector("#easybtn");
var hardbtn = document.querySelector("#hardbtn");


// to remove duplicate code watch lecture 203

easybtn.addEventListener("click",function(){
	hardbtn.classList.remove("selected");
	easybtn.classList.add("selected");

	num=3;
	colors = generaterandomcolors(num);
	pickedcolor = pickcolor();
	colordisplay.textContent = pickedcolor;

	for(var i=0 ; i<squares.length ; i++)
	{
		if(colors[i]){
			squares[i].style.backgroundColor=colors[i];
		}else{
			squares[i].style.display = "none";
		}
	} 
});

hardbtn.addEventListener("click",function(){
	easybtn.classList.remove("selected");
	hardbtn.classList.add("selected");
	num=6;
	colors = generaterandomcolors(num);
	pickedcolor = pickcolor();
	colordisplay.textContent = pickedcolor;

	for(var i=0 ; i<squares.length ; i++)
	{
			squares[i].style.backgroundColor=colors[i];
			squares[i].style.display = "block";
		
	} 
})


resetbutton.addEventListener("click",function(){
	colors = generaterandomcolors(num);
	pickedcolor = pickcolor();
	colordisplay.textContent = pickedcolor;
	messagedisplay.textContent = "";
	this.textContent="NEW COLORS";


	for( var i=0; i<squares.length ; i++)
	{
		squares[i].style.backgroundColor=colors[i];

	}

	h1.style.backgroundColor = "steelblue";
})

colordisplay.textContent = pickedcolor;

for( var i=0; i<squares.length ; i++)
{
	squares[i].style.backgroundColor=colors[i];

	squares[i].addEventListener("click",function(){
		var clickedcolor = this.style.backgroundColor;
		if(clickedcolor === pickedcolor){
				messagedisplay.textContent = "Correct!!";
				resetbutton.textContent = "Play Again?";
				changecolor(clickedcolor);
				h1.style.backgroundColor = clickedcolor;
		}else{
			this.style.backgroundColor = "#232323";
			messagedisplay.textContent = "Try Again";
		}

	});
}


function changecolor(color){
	for( var i=0; i<squares.length ; i++)
	{
		squares[i].style.backgroundColor = color;
	}
}

function pickcolor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generaterandomcolors(num){
	var arr = [];
	for(var i = 0; i < num; i++ ){
		arr.push(randomcolor());
	}

	return arr;
}

function randomcolor(num){
	
		var r = Math.floor(Math.random() * 256);
		var g = Math.floor(Math.random() * 256);
		var b = Math.floor(Math.random() * 256);

		return "rgb(" + r + ", " + g + ", " + b + ")";
}