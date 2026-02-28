//LAB 3 - ARRAYS & LOOPS - PART 3

//PART 3 - SHOPPING CART SHIPPING
//==== VARIABLES ========
var userInput;
shoppingCart = [];
var cartTotal = 0;
//==== LOGIC ========

//CHECK FOR ITEMS UNTIL THRESHOLD IS MET


while (cartTotal < 35) {
	userInput = parseInt(prompt("Enter item cost"));
cartTotal += userInput;
shoppingCart.push(userInput);
		//GET ITEM COST FROM USER

	} 
		alert("You have " + shoppingCart.length + " items in your cart. Your total is $" + cartTotal + ". You qualify for free shipping!");
console.log(shoppingCart.join(" | "));
//CONVERT USER INPUT TO A NUMBER
//ADD ITEM COST TO RUNNING TOTAL VARIABLE


	//PUSH ITEM COST TO CART ARRAY
	
	
	


//SEND POPUP MESSAGE TO USER


//SEND OUTPUT TO CONSOLE

