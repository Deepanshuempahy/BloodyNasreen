
var image = document.getElementById("image");
var imgwidth = image.width;
image.style.left = "20px";



function complete(){
	var stintrl = setInterval(move, 50)
	function move(){
//		console.log(image.style.left);
			image.src = "left.png";
			
		console.log((screen.width - imgwidth) +"px");
		if (parseInt(image.style.left) > parseInt((screen.width - imgwidth))){
//			console.log("j");
			image.style.left = "20px";
			clearInterval(stintrl);
			image.src="front.png";
		}
		else{
//			console.log("dkjsfkds");
			image.style.left = parseInt(image.style.left)  + 20 +"px";
		}
	}

}