/**
 * 
 */
function test(){
	alert("I work!");
}

function changeThePTag(){
	document.getElementById("thePTag").innerHTML = "Some new Text";
}

function alterPTagStyle(){
	document.getElementById("thePTag").style.border = "10px solid green";
	document.getElementById("thePTag").style.fontSize = "80pt";
	document.getElementById("thePTag").style.color = "red";
}

function changeDiv(){
	let value = document.getElementById("daDiv").innerHTML;
	if(value == "A"){
		document.getElementById("daDiv").innerHTML = "B";
	}
	else{
		document.getElementById("daDiv").innerHTML = "A";
	}
}

function moreMrTable(){
	document.getElementById("mrTable").innerHTML +=
		"<tr> <td> stuff </td> <td> things </td> </tr>";
}