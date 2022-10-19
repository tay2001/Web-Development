function submit() {
	var x = document.getElementById("fname").value;
	var y = "Thank You for registering! ";
	document.getElementById("submit").style.fontSize ="30px";
	document.getElementById("submit").style.fontFamily ="Verdana";
	document.getElementById("submit").innerHTML = y + x;
	document.getElementById("smiley").src ='images/smiley.jpeg';
}

function cancel() {
	document.getElementById("submit").style.fontSize ="30px"
	document.getElementById("submit").style.fontFamily ="Verdana";
	document.getElementById("submit").innerHTML = "Sorry to see you go!"
}

function age(){
	var x = document.getElementById("ages").value;
	if(x<=13) {
		document.getElementById("agegroup").style.fontSize ="30px";
		document.getElementById("agegroup").style.fontFamily ="Verdana";
		document.getElementById("agegroup").innerHTML = "You're part of the Concert Music Group!"
	} 
	else {
		document.getElementById("agegroup").style.fontSize ="30px";
		document.getElementById("agegroup").style.fontFamily ="Verdana";
		document.getElementById("agegroup").innerHTML = "You're part of the Chamber Music Group!"
	}

}

function activity1(){
	document.getElementById("activity1").style.color ="blue"
}

function activity2(){
	document.getElementById("activity2").style.color ="blue"
}

function activity3(){
	document.getElementById("activity3").style.color ="blue"
}

function activity4(){
	document.getElementById("Activity4").style.color ="blue"
}

function activity5(){
	document.getElementById("Activity5").style.color ="blue"
}

function activity6(){
	document.getElementById("Activity4").style.color ="blue"
}
	