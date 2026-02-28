/* LAB 7 - SHIPPING FORM */

//WAIT FOR PAGE TO LOAD//
window.onload = function loadPage() {

	//Order Shipping object (for extra EXTRA challenge, otherwise, ignore it)
	var shipInfo = {
		name: "",
		pc: "",
		speed: "",
		cost: 0
	};

	//==== CREATE YOUR PSEUDOCODE COMMENTS FIRST

	var sForm = document.getElementById("shippingForm")
	var thanksMessage = document.getElementById("thanks_msg")
	
	sForm.onsubmit = function showThanks() {
		var name = document.getElementById("in_Name").value;
		var postalCode = document.getElementById("in_pc").value;

			if (name === ""|| name == null|| name === " ") {
				document.getElementById("in_Name").style.backgroundColor = "red";
				document.getElementById("in_Name").focus();
				return false;
			};
			
		console.log(name)

			if (postalCode === ""|| postalCode == null || postalCode === " ") {
				document.getElementById("in_pc").style.backgroundColor = "red";
				document.getElementById("in_pc").focus();
				return false;
			};
			
		console.log(postalCode)
		
	document.getElementById("thanksCustomer").innerHTML = name;
	document.getElementById("thanksPC").innerHTML = postalCode;

		sForm.style.display = "none";
		thanksMessage.style.display = "block";
		return false;
	};
	};
	
