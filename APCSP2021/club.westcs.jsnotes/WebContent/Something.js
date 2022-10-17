
class Dog{
	
	constructor(color, size, name){ //this is a function that runs when you make a new object
		this.color = color; //attributes or the stuff an object is made of
		this.size = size;
		this.name = name;
	}
	
	//functions that belong to an object are called methods
	bark(){
		alert(this.name + " barked.")
	}
}

var dogs = [new Dog("red", "images/rickRoll.jpg", "sparky"), new Dog("blue", "images/Stalin.jpg", "Bluey")]

function dogsBark(){
	for(dog of dogs){
		dog.bark();
	}
	if(document.getElementById("picture").src.includes(dogs[0].size)){
		alert(dogs[0].bark());
	}
	else{
		alert(dogs[1].bark());
	}
}












function changeDivs(){
	let daDivs = document.getElementsByClassName("box");
	for(let i = 0; i < daDivs.length; i++){
			daDivs[i].style.borderRadius = "25% 50%";
		daDivs[i].style.backgroundColor = "olive"
	}	
	document.body.innerHTML += '<div class = "box" style = "background-color : red"> </div>'
}

function randomizeDaDivs(){
	let daDivs = document.getElementsByClassName("box");
	for(let i = 0; i < daDivs.length; i++){
		daDivs[i].style.backgroundColor = "rgb(" +
												Math.floor(Math.random() * 256) + "," +
												Math.floor(Math.random() * 256) + "," +
												Math.floor(Math.random() * 256) +  
												")";
												
								
	}
}

function siezure() {
	let daDivs = document.getElementsByClassName("box");
	while(1 == 1){
	for(let i = 0; i < daDivs.length; i++){
		daDivs[i].style.backgroundColor = "rgb(" +
												Math.floor(Math.random() * 256) + "," +
												Math.floor(Math.random() * 256) + "," +
												Math.floor(Math.random() * 256) +  
												")";
		}
	}
}


function changePic(){
	currentPic = document.getElementById("picture").src;
	if(currentPic.includes("Stalin.jpg")){
		document.getElementById("picture").src = "images/rickRoll.jpg";
	}
	else{
		document.getElementById("picture").src = "images/Stalin.jpg";
	}
}