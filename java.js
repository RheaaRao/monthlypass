var weekly;
var monthly;

function passCalc(){
	weekly=document.getElementById("week").value;
	monthly= weekly * 4;
	alert ("you travel by subway approximately" + monthly + " times a month");
	rightPass();
}

function rightPass(){
	if (monthly<43) {
		alert("you don't need a monthly pass");
} else {
	alert("you need a monthly pass");
}

}
