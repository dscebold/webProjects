class product {
	constructor(src, cap, price, num, name, ib) {
		this.src = src;
		this.caption = cap;
		this.price = price;
		this.num = num;
		this.name = name;
		this.ib = ib;
	}

	toString() {
		return this.caption + "<br>$" + this.price
	}

}

let abrams = new product("images/JABRDLogo.png", "Firing 40 pounds of depleted Uranium at your Cranium", 3000000, 0, "A1 Abrams", "abr");
let warthog = new product("images/JABRDLogo.png", "Literally to angry to die Energy, the Flying Warcrime", 3500000, 0, "A10 Warthog", "war");
let ac130 = new product("images/JABRDLogo.png", "Minigun go Brrrrrrt", 9000000, 0, "AC130", "ac1");
let apache = new product("images/JABRDLogo.png", "If you are reading this you are already dead", 4000000, 0, "Apache Longbow", "apa");
let iowa = new product("images/JABRDLogo.png", "45,000 tons of 16 inch Freedom", 15000000, 0, "USS Iowa", "iow");
let bradley = new product("images/JABRDLogo.png", "Push up with the Bradley *Explosion* F#@K, the Bradley's down.", 2500000, 0, "Bradley", "brad");
let f16 = new product("images/JABRDLogo.png", "Dear Grid Coordinates, you no longer exist,<br>Sincerly F16", 7000000, 0, "F16", "f1");
let huey = new product("images/JABRDLogo.png", "Fortunate Son Intensifies", 5000000, 0, "Huey", "hue");

//an array of products 
var products = [abrams, warthog, ac130, apache, iowa, bradley, f16, huey];


sessionStorage.setItem("abrams", 0);
sessionStorage.setItem("warthog", 0);
sessionStorage.setItem("ac130", 0);
sessionStorage.setItem("apache", 0);
sessionStorage.setItem("iowa", 0);
sessionStorage.setItem("bradley", 0);
sessionStorage.setItem("f16", 0);
sessionStorage.setItem("huey", 0);


function mainImg(id) {
	var temp = document.getElementById("mainImg").src;
	document.getElementById("mainImg").src = id.src;
	id.src = temp;
	for (product of products) {
		if (document.getElementById("mainImg").src.includes(product.src)) {
			document.getElementById("caption").innerHTML = product.toString();
		}
	}
}

function test() {
	revive();
}


function revive() {
	for (product of products) {
		if (Number.isInteger(parseInt(sessionStorage.getItem(product.name)))) {
			product.num = parseInt(sessionStorage.getItem(product.name));
		}
	}
}

var totalNum = 0;
var totalPrice = 0;



function addToCart() {
	for (product of products) {
		if (document.getElementById("mainImg").src.includes(product.src)) {
			product.num += 1;

			totalNum = 0;
			totalPrice = 0;
			for (product of products) {
				totalNum += product.num;
				totalPrice += (product.num * product.price);
			}

		}

	}


	newItem();
}

function newItem() {
	for (product of products) {
		sessionStorage.removeItem(product.name);
		sessionStorage.setItem(product.name, product.num);
	}
}



function makeCart() {
	document.getElementById("cartTable").innerHTML = "";
	for (product of products) {
		if ((sessionStorage.getItem(product.name) != null) && parseInt(sessionStorage.getItem(product.name)) >= 1) {
			document.getElementById("cartTable").innerHTML += "<tr> <td><img src = '" + product.src + "'> " + product.name + "</td> <td> " + sessionStorage.getItem(product.name) + "<button id = '" + product.ib + "' onclick = 'nope(this)'>Delete</button> <button id = '" + product.ib + "' onclick = 'deleteAll(this)'>Delete All</button>" + "</td> <td>$" + (sessionStorage.getItem(product.name) * product.price) + "</td> </tr>"
		}
	}
	revive();
	totalNum = 0;
	totalPrice = 0;
	for (product of products) {
		totalNum += product.num;
		totalPrice += (product.num * product.price);
	}
	document.getElementById("total").innerHTML = "Total Products: " + totalNum + " | Total Price: $" + totalPrice;

	var makeout = setTimeout(makeCart, 1000);
}



const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

function clock() {
	const d = new Date();
	d.getHours(); // 24hour clock
	d.getMinutes(); // if minutes is less than 10 it will be one number long
	d.getSeconds();
	d.getDay();
	var amPM = "AM";
	if (d.getHours() > 12) {
		var amPM = "PM"
	}
	var minutes = d.getMinutes();
	if (d.getMinutes() < 10) {
		minutes = "0" + d.getMinutes();
	}
	var seconds = d.getSeconds();
	if (d.getSeconds() < 10) {
		seconds = "0" + d.getSeconds();
	}
	let time = days[d.getDay()] + " " + (d.getHours() % 12) + ":" + minutes + ":" + seconds + " " + amPM;
	// concat a 0 before minutes
	document.getElementById("clock").innerHTML = time;
	//write to the page  getHours() % 12 + ":" + minutes + amPm
}

function changeColor() {
	const e = new Date();
	let h = e.getHours();
	let i = e.getMinutes();
	let j = e.getDay();

	if (((j == 2 || j == 3 || j == 4) && (h > 2 && h < 3)) || ((j == 0) && (h > 10 && h < 17)) || ((j == 5 || j == 6) && (h > 0 && h < 22) && (i > 0))) {
		document.getElementById("store").style.backgroundColor = "#00FF00"

	}
	else if (((j == 2 || j == 3 || j == 4) && (h > 1 && h < 4)) || ((j == 5 || j == 6) && (h > 23)) || ((j == 4) && (h > 23)) || ((j == 0) && (h > 9 && h < 18)) && (i > 0)) {
		document.getElementById("store").style.backgroundColor = "#FFFF00";

	}
	else if (j == 1) {
		document.getElementById("store").style.backgroundColor = "#FF0000";

	}
	else {
		document.getElementById("store").style.backgroundColor = "#FF0000";

	}
	var colorout = setTimeout(changeColor, 1000);
}


function changeOpen() {
	const f = new Date();
	let h = f.getHours();
	let i = f.getMinutes();
	let j = f.getDay();

	if (((j == 2 || j == 3 || j == 4) && (h > 2 && h < 3)) || ((j == 0) && (h > 10 && h < 17)) || ((j == 5 || j == 6) && (h > 0 && h < 22) && (i > 0))) {
		document.getElementById("openClosedTxt").innerHTML = "Open";
		document.getElementById("openClosedTxt").style.color = "#00FF00"
	}
	else if (((j == 2 || j == 3 || j == 4) && (h > 1 && h < 2)) || ((j == 5 || j == 6) && (h > 23)) || ((j == 4) && (h > 23)) || ((j == 0) && (h > 9 && h < 10)) && (i > 0)) {
		document.getElementById("openClosedTxt").innerHTML = "Opening Soon";
		document.getElementById("openClosedTxt").style.color = "#00FF00"
	}
	else if (((j == 2 || j == 3 || j == 4) && (h > 3 && h < 4)) || ((j == 5 || j == 6) && (h > 22 && h < 23)) || ((j == 0) && (h > 17 && h < 18)) && (i > 0)) {
		document.getElementById("openClosedTxt").innerHTML = "Closeing Soon";
		document.getElementById("openClosedTxt").style.color = "#FFFF00"
	}
	else if (j == 1) {
		document.getElementById("openClosedTxt").innerHTML = "Closed";
		document.getElementById("openClosedTxt").style.color = "#FF0000"
	}
	else {
		document.getElementById("openClosedTxt").innerHTML = "Closed";
		document.getElementById("openClosedTxt").style.color = "#FF0000"
	}
	var openout = setTimeout(changeOpen, 1000);
}


function update() {
	makeCart();
}



function nope(id) {
	for (product of products) {
		if (id.id == product.ib) {
			if (Number.isInteger(parseInt(sessionStorage.getItem(product.name)))) {
				var temp = parseInt(sessionStorage.getItem(product.name));
				temp = temp - 1;
				sessionStorage.setItem(product.name, temp);
			}
		}
	}
	console.log(sessionStorage);
	revive();
}

function deleteAll(id) {
	for (product of products) {
		if (id.id == product.ib) {
			sessionStorage.removeItem(product.name);
		}
	}
	revive();
	console.log(sessionStorage);
}


function checkOut(){
	for(product of products) {
		sessionStorage.removeItem(product.name); 
	}
}























