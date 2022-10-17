
pictures = ["angles", "captain", "compass", "death", "gold"];
picNums = [0,0,0,0,0];

function retrieveSessionStorage(){

}

function storeSessionStorrage(id){

}

function printSessionStorage(){

}

function updateSessionStorage(){

}


function myFunction() {
  let filter = document.getElementById('myInput').value.toUpperCase();
  let li = document.getElementsByClassName("picture");
  for (let i = 0; i < li.length; i++) {
    if (li[i].name.toUpperCase().includes(filter)) {
     	li[i].style.display = "";
    } 
	else{
     	li[i].style.display = "none";
    } 
  }
}



