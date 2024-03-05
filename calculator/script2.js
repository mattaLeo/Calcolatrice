const image = document.getElementById("image");

function changeImage(){
	if(image.src.endsWith("Immagini/RichWhiteMan.jpg")){
		image.src = "Immagini/UomoNeroInPrigione.jpg";
	}else{
		image.src = "Immagini/RichWhiteMan.jpg";
	}
}
