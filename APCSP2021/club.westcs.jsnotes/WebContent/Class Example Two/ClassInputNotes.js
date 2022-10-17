class Person{
	//constructor that takes five parameters. name, password, num, color, food
		// six attributes for each form field and for the src of the selected image
		constructor(name, password, num, color, food){
			this.name = name;
			this.password = password;
			this.age = num;
			this.color = color
			this.food = food;
			this.src = document.getElementById("chosenPic").src;
		}
}
var fields = ["myInputName", "myInputPassword", "myInputAge","myInputColor", "myInputFood"];
var people= [];
/**
 * @return true if all form fields are filled out for this form.
 */
function validate(){
	for(field of fields){
		if(document.getElementById(field).value == "" ){
			return false;
		}
	}
	return !(document.getElementById("chosenPic") == null);
}
/**
 * removed the id attribute for all class picture HTML items
 * Adds the id chosenPic to the parameter HTML element 
 */
function changePic(id){
	let pictures = document.getElementsByClassName("picture");
	for(pic of pictures){
		pic.removeAttribute('id');
	}
	id.id = "chosenPic";
}

function makePerson(){
	if(validate()){
		people.push(new Person(
			document.getElementById("myInputName").value,
			document.getElementById("myInputPassword").value,
			document.getElementById("myInputAge").value,
			document.getElementById("myInputColor").value,
			document.getElementById("myInputFood").value
		) );
	}
	populatePeople();
}
function populatePeople(){
	document.getElementById("peoplePlace").innerHTML = "";
	for(person of people){
		document.getElementById("peoplePlace").innerHTML += 
		"<div>" +
		"<p> Name: " + person.name + "</p>" + 
		"<p> Password: " + person.password + "</p>" + 
		"<p> Age: " + person.age + "</p>" + 
		"<p> Color: " + person.color + "</p>" + 
		"<p> Food: " + person.food + "</p>" + 
		"<img class = 'picture' src='" + person.src + "'/>" 
		+ "</div>";
	}
}

