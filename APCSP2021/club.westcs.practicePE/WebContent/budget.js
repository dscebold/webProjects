class budget {
	constructor(price, name) {
		this.price = price;
		this.name = name;
	}
}


function checkNum() {
	if (!(isNaN(document.getElementById("price").value))) {
		add()
	}
	else {
		alert("That is not a Number");
	}
}



const items = [];

function add() {
	var boo = true;
	if (items.length == 0) {
		var temp = new budget(document.getElementById("price").value, document.getElementById("name").value);
		items.push(temp);
		makeTable();
		console.log(items);
	}
	else {
		for (item of items) {
			if (item.name.toLowerCase() == document.getElementById("name").value.toLowerCase() && (boo == true)) {
				alert("You Have Already Used This Name. Please Pick Another One")
				boo = false;
			}

		}
		if (boo == true) {
			var temp = new budget(document.getElementById("price").value, document.getElementById("name").value);
			items.push(temp);
			makeTable();

			console.log(items);

		}



	}

	document.getElementById("price").value = "";
	document.getElementById("name").value = "";

}





var totalPrice = 0;


function addTotal() {
	totalPrice = 0
	for (item of items) {
		totalPrice += (parseFloat(item.price) * 1.2);
	}
	var totalout = setTimeout(addTotal, 1000);
	return totalPrice;
}


function nope(id) {
	alert(id.id);
	for (let i = 0; i < items.length; i++) {
		if (id.id.includes(items[i].name)) {
			items.splice(i, 1);
		}
	}
	makeTable();
}



function makeTable() {
	document.getElementById("table1").innerHTML = "";
	for (item of items) {
		document.getElementById("table1").innerHTML += "<tr> <td><button id = '" + item.name + "' onclick = 'nope(this)'>Delete</Button></td> <td>" + item.name + "</td> <td>$" + item.price + "</td> <td>$" + ((item.price * .2).toFixed(2)) + "</td> <td>$" + ((item.price * 1.2).toFixed(2)) + "</td> </tr>";

	}
	document.getElementById("grandTotal").innerHTML = "";
	document.getElementById("grandTotal").innerHTML = "$" + totalPrice.toFixed(2);
}