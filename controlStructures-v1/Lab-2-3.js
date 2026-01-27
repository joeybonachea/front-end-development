//######## LAB 2-3 EMAIL SIGNUP ########
//alert("hey 2.3");//COMMENT OUT ONCE CONNECTED TO YOUR HTML PAGE
//==== VARIABLES =========
var userEmail;
var emailInput=confirm("Would you like to join our mailing list?");

//==== LOGIC =============
if (emailInput===true){
    userEmail=prompt("Please enter your email address:", "me@example.com");
    console.log(userEmail);

    if (userEmail!==null && userEmail.trim() !=="" && userEmail!=="me@example.com")
        {alert("Thank you! " + userEmail + " has been added to our mailing list.");
        console.log("Valid email entered: " + userEmail);
        }    
    else {
        alert ("Thank you, but your email was not valid.");
        console.log("Invalid email entered.");
        }
} else {
    alert("Thank you, we will not bother you again.")}
    