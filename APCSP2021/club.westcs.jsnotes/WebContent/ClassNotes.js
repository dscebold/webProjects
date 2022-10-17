/**
 * 
 */
class Person{
	
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	
	getOlder(num){
		this.age += name;
	}
	
	toString(){
		return this.name + " is " + this.age + " years old." ;
	}
}




var people = [new Person("Joe Guy", 24), new Person ("Norm Normal", 33), new Person("Gen Eric", 17)];

function nextPerson(){
	for(let i = 0; i < people.length; i++){
		if(document.getElementById("toString").innerHTML.includes(people[i].name)){
			var next = i + 1;
			if(next == people.length){
				next = 0;
			}
			document.getElementById("toString").innerHTML = people[next].toString();
			break;
		}
	}
}