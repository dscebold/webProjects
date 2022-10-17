class product {
	constructor(src, cap, price) {
		this.src = src;
		this.caption = cap;
		this.price = price;
	}
	
	toString(){
		return this.caption + "/n$" + this.price
	}

}

let abrams = new product("images/a1Abrams.jpg" , "Firing 40 pounds of depleted Uranium at your Cranium", 3000000);
let warthog = new product("images/a10Warthog.jpg", "Literally to angry to die Energy, the Flying Warcrime", 3500000);
let ac130 = new product("images/ac130.jpg", "Minigun go Brrrrrrt", 9000000);
let apache = new product("images/apache.jpg", "If you are reading this you are already dead", 4000000);
let iowa = new product("images/iowa.jpg", "45,000 tons of 16 inch Freedom", 15000000);
let bradley = new product("images/bradley.jpg", "Push up with the Bradley *Explosion* F#@K, the Bradley's down.", 2500000);
let f16 = new product("images/f16.jpg", "Dear Grid Coordinates, you no longer exist,/nSincerly F16", 7000000 );
let huey = new product("images/huey.jpg", "Fortunate Son Intensifies", 5000000);

//an array of products 
var products = [abrams, warthog, ac130, apache, iowa, bradley, f16, huey];

function mainImg(id) {
	var temp = document.getElementById("mainImg").src;
	document.getElementById("mainImg").src = id.src;
	id.src = temp;
	
	
	for(let i = 0; i < products.length; i++){
		if(document.getElementById("caption").innerHTML.includes(products[i].price)){
			var next = i + 1;
			if(next == products.length){
				next = 0;
			}
			document.getElementById("caption").innerHTML = products[next].toString();
			break;
		}
	}
}
	
	


var cart = [];