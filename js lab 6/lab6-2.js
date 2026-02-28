//#### LAB 6 - DOM MANIPULATION ####
//PART 2: MYSTERY BOX

//LISTEN FOR load EVENT
window.onload = init;

//'WRAPPER' FUNCTION FOR DOM LOGIC
function init() {

	//GET DOM ELEMENTS WE'LL NEED
	var mBox = document.getElementById("mysteryBox")
	var btn = document.getElementById("buttonBox")


	//====CREATE THE FUNCTIONS WE'LL NEED====
	//FUNCTION TO ASK USER
	function userAsk() {
		let userInput = confirm("Do you want to see something?")
		if (userInput === true) {
			mBox.style.display = "none"
			btn.style.display = "block"
			btn.onclick = changeBox
		}
	}

	//FUNCTION TO CHANGE buttonBox
	function changeBox() {
		btn.style.width = "600px";
		btn.style.backgroundColor = "orange";
		btn.innerHTML = "<h2> SURPRISE!!</h2>";
	}
	//SETUP LISTENERS
	mBox.onmouseover = userAsk;
	btn.onclick = changeBox;

}
//END onload FUNCTION