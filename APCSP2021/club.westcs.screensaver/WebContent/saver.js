/**
 * 
 */

function runThis() {
	while(true) {
		for(let i = 0; i < 50; i++){
		}
		document.getElementById("input").innerHTML += "" + makeString();  
	}
}


let bigText = "1q2w3e4r5t6y7jukijuygtre4r5t76yikjuhygtre345t67uikuytreswaq2w376yi9o;poiu7yt65r4e4r76yilo;ploiu5re4w324r5t6yi9loi9u7yt65re4w3e7ykilokiut65re4w32s345rmkiolkiu87yt65re4r5t6y8ik9u87yt65r4er5t76yuiu87yt65re43we4rkilo,mkijhu7y6t5re4r5tki99u87yt65re4w3e45r7yukik9u87yt65re43e45i9lopo9iu87yt654e3we4r5t76yki9oli9u87yt65re4w3sde4frmki,lokmiu7yt65r4e34hy";


function makeString() {
	let print = bigText.substring(Math.floor(Math.random() * 344), Math.floor(Math.random) * 344);
	let make = document.getElementById("input").innerHTML += "<br>" + print; 
	return make; 
}