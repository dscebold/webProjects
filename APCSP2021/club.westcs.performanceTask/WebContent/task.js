class prey { //class that creates and defines the predators
	constructor(hunger, age, gender) {
		this.hunger = hunger;
		this.age = age;
		this.gender = gender;

	}

}


class predator { //class that creates and defines the predators
	constructor(hungry, lifespan, mate) {
		this.hungry = hungry
		this.lifespan = lifespan;
		this.mate = mate;
	}
}


function setGender() { //function that sets the preys gender
	if (Math.floor(Math.random() * 2) == 0) { //random() integer function from W3 schools, returns a number from 0 - 1
		return true;
	}
	else {
		return false;
	}

}
class preyStat { //class that sets the preys stats based on the selected image
	constructor(src, escape) {
		this.src = src;
		this.escape = escape;
	}
}

class predatorStat { //class that sets the preys stats based on the selected image
	constructor(link, hunt) {
		this.link = link;
		this.hunt = hunt;
	}
}

let antelope = new preyStat("images/antelope.jpg", 4); //turning all the images into either preyStat or predatorStat objects
let deer = new preyStat("images/deer.jpg", 4);
let elk = new preyStat("images/elk.jpg", 5);
let fish = new preyStat("images/fish.jpg", 2);
let rabbit = new preyStat("images/rabbit.jpg", 3);
let seal = new preyStat("images/seal.jpg", 4);
let squirrel = new preyStat("images/squirrel.jpg", 5);
let zebra = new preyStat("images/zebra.jpg", 3);



let anaconda = new predatorStat("images/anaconda.jpg", 5);
let bear = new predatorStat("images/bear.jpg", 6);
let crocodile = new predatorStat("images/crocodile.jpg", 3);
let eagle = new predatorStat("images/eagle.jpg", 2);
let lion = new predatorStat("images/lion.jpg", 6);
let panther = new predatorStat("images/panther.jpg", 2);
let shark = new predatorStat("images/shark.jpg", 3);
let wolf = new predatorStat("images/wolf.jpg", 4);



const imgs = [antelope, deer, elk, fish, rabbit, seal, squirrel, zebra]; //arraylist of preyStat items

const pics = [anaconda, bear, crocodile, eagle, lion, panther, shark, wolf]; //arraylizt of predatorStat items






function mainPreyImg(id) { //image switcher fo the prey images
	let blue = document.getElementById("mainPreyImg").src; //stores main image src in blue
	document.getElementById("mainPreyImg").src = id.src; //makes the clicked on image the main image
	id.src = blue; //replaces the clicked on image with the main image
}

function mainPredatorImg(id) { //image switcher for predator images 
	let yellow = document.getElementById("mainPredatorImg").src; //stores main image src in blue
	document.getElementById("mainPredatorImg").src = id.src; //makes the clicked on image the main image
	id.src = yellow; //replaces the clicked on image with the main image
}


function findPreySrc() { //gets the escape stat for the main prey image
	for (im of imgs) {
		if (document.getElementById("mainPreyImg").src.includes(im.src)) {
			let pink = im.escape;
			return pink; //returns the main prey escape stat
		}
	}
}

function findPredatorSrc() { //gets the hunt success stat for the main predator image
	for (pic of pics) {
		if (document.getElementById("mainPredatorImg").src.includes(pic.link)) {
			let purple = pic.hunt;
			return purple; //returns the main predator hunting stat 
		}
	}
}


var plants = 0;

const preyList = [];

const predatorList = []; //creating all the empty array lists I will need 

const preyBabies = [];

const predatorBabies = [];


function startSim() { //function that runs on click of a button and starts the game
	plants = 0;
	for (let i = 0; i < preyList.length; i++) {  //emptys the arraylists and sets plants to zero
		preyList.splice(i, 1);
	}
	for (let i = 0; i < predatorList.length; i++) {
		predatorList.splice(i, 1);
	}



	if ((!(isNaN(document.getElementById("preyInput").value))) && (!(isNaN(document.getElementById("predatorInput").value))) && (!(isNaN(document.getElementById("plantInput").value)))) { //makes sure all the input fields are numbers 
		for (let i = 0; i <= Math.abs(parseInt(document.getElementById("preyInput").value)); i++) { //creates as many prey as number in input field
			let temp = new prey((Math.floor(Math.random() * 50) + 100), (Math.floor(Math.random() * 10) + 1), setGender()) //sets the prey hunger to be 100 to 150 and age to be 1-10 using a random() function from W3 Schools
			preyList.push(temp);
		}
		for (let i = 0; i <= Math.abs(parseInt(document.getElementById("predatorInput").value)); i++) { //creates as many predator as number in input field
			let tamp = new predator((Math.floor(Math.random() * 50) + 50), (Math.floor(Math.random() * 10) + 1), setGender()) //sets the predtor hunger to be 100 to 50 and age to be 1-10 using a random() function from W3 Schools
			predatorList.push(tamp);
		}

		plants = Math.abs(parseInt(document.getElementById("plantInput").value)); //sets plants to number in input field, random() function from W3 Schools



		document.getElementById("preyInput").value = "";
		document.getElementById("predatorInput").value = "";//emptys the imput field
		document.getElementById("plantInput").value = "";

		runSim(); //calls the runSim() function
	}
	else {
		alert("One of your Inputs is not a number. Please make sure all of your Inputs are numbers"); //tells them they need to put all numbers or else it wont work 
	}
}




function runSim(run = findPreySrc(), kill = findPredatorSrc()) {
	for (bunny of preyList) {
		if (bunny.hunger > 150) {
			bunny.hunger = 150;
		}
		if (bunny.hunger < 0) {
			bunny.hunger = 0;
		}
	}
	for (lion of predatorList) {
		if (lion.hungry > 100) {
			lion.hungry = 100;
		}
		if (lion.hungry < 0) {
			lion.hungry = 0;
		}
	}										//makes sure all hunger stats are witin the accepted values, no negative hunger or to full of a belly
	if (plants > 1500000000) {
		plants = 1500000000; //makes sure there aren't too many or too few plants
	}
	if (plants < 0) {
		plants = 0;
	}
	checkAlive(); // calls check alive function
	mate(); //calls mate function
	changeSize() // calls the change size function
	plants = (plants + (plants % 20));
	for (bunny of preyList) {
		bunny.age++;  // ages the prey 
		bunny.hunger -= Math.floor(Math.random() * 15) + 10;  //makes prey hungrier, random() function from W3 Schools
		checkAlive();
		if (bunny.hunger <= 75 && plants > 0) {  //checks to see if prey is hungry
			let grass = Math.floor(Math.random() * 25) + 25; //random() function from W3 Schools
			bunny.hunger += grass;  //feeds prey and gets rid of plants
			plants -= grass;
		}
	}
	for (lion of predatorList) {
		lion.lifespan = lion.lifespan + 1;
		lion.hungry -= Math.floor(Math.random() * 15) + 5 //makes the predator hungrier, random() function from W3 Schools
		checkAlive();
		if (lion.hungry < 50 && preyList.length > 0) { //checks if predator is hungry and prey exist
			if (Math.floor(Math.random() * kill) == 1) { //chance predator finds a prey dependent on which image you have selected, random() function from W3 Schools
				if (Math.floor(Math.random() * run) == 1) { //chance the prey escapes dependent on which image you have selected, random() function from W3 Schools

				}
				else {
					let food = Math.floor(Math.random() * preyList.length); //random() function from W3 Schools
					lion.hungry += preyList[food].hunger; //feeds the predator a random prey and adds its hunger to predators hunger
					preyList.splice(food, 1);
				}
			}
		}
	}

	refresh(); //updates the predator and prey numbers on the webpage
	if (preyList.length > 0 && predatorList.length > 0 && plants > 0) { //checks to see that all three parts of ecosytem still exist
		var year = setTimeout(runSim, 1000);
	}
	else {
		alert("Game Over"); //if any go extinct it is game over
	}

}


function checkAlive() {
	for (let i = 0; i < preyList.length; i++) {
		if ((preyList[i].hunger <= 0) || (preyList[i].age >= 40)) { //checks if each prey is alive
			preyList.splice(i, 1); // if the prey is not alive, removes it 
		}
	}
	for (let i = 0; i < predatorList.length; i++) {
		if ((predatorList[i].hungry <= 0) || (predatorList[i].age >= 40)) { //checks if each predator is starving or old enough to die
			predatorList.splice(i, 1); //if it is it removes it
		}
	}
}


function mate() {
	let hello = (preyList.length % 40); //gets 2/5 the preys current population
	let goodbye = (predatorList.length % 10); //gets 1/10 the predators current population
	for (let i = 0; i <= hello; i++) {
		if (preyList[Math.floor(Math.random() * preyList.length)].gender != preyList[Math.floor(Math.random() * preyList.length)].gender) { //makes sure both prey have different genders, random() function from W3 Schools
			let baby = new prey(150, 1, setGender()); //creates a new prey
			preyBabies.push(baby); //adds new prey to preyBabies List so that the babies can't have babies
		}
	}
	for (let i = 0; i <= goodbye; i++) {
		if ((predatorList[Math.floor(Math.random() * predatorList.length)].mate != predatorList[Math.floor(Math.random() * predatorList.length)].mate)) { //makes sure both predators have different genders, random() function from W3 Schools
			let boby = new predator(100, 1, setGender()); //creates a new predator
			predatorBabies.push(boby); //adds new predator to predatorBabies List so that the babies can't have babies'
		}
	}
	for (let i = 0; i < preyBabies.length; i++) { //moves the prey babies from the prey babies list to the actual preyList
		preyList.push(preyBabies[i]);
		preyBabies.splice(i, 1); //removes them from preBabies list

	}
	for (let i = 0; i < predatorBabies.length; i++) { //moves the predator babies from the predator babies list to the actual predatorList

		predatorList.push(predatorBabies[i]);
		predatorBabies.splice(i, 1); //removes them from the predator babies list
	}

}


function refresh() { //updates the webpage with the most recent values
	document.getElementById("count").innerHTML = "Prey: " + (preyList.length + 1) + "<br>Predators: " + (predatorList.length + 1) + "<br>Plants: " + plants;
}

function changeSize() {//changes the size of the main image based on their proportion of the total population
	let big = preyList.length + predatorList.length; //gets total population
	let preySize = ((preyList.length / big) * 100); //gets prey proportion
	let predatorSize = ((predatorList.length / big) * 100); //gets predator proportion
	document.getElementById("mainPreyImg").style.width = preySize + "%"; //sets main prey image width to prey proportion percent
	document.getElementById("mainPredatorImg").style.width = predatorSize + "%"; //sets main predator image to predator proportion percent
}

