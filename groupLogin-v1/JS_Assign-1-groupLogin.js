//DECLARE VARIABLES AND ARRAY
var numInput;
var teamNumber;
var firstName;
var loggedIn;
var lastName;
teamNumber = 1;
var myTeam = [
    { firstName: "Ravi", lastName: "Kumar" },
    { firstName: "Joe", lastName: "Bonachea" },
    { firstName: "Lovepreet", lastName: "Singh" },
    { firstName: "Rinzin", lastName: "Tenzin" }
];
//LOGIC SECTION
//LOOP UNTIL LOGIN WORKS 
while (loggedIn===false || loggedIn===undefined) {
    numInput = parseInt(prompt("Enter team number:"));
    console.log(numInput);
    if (numInput === null || numInput === "") {
        alert("ACCESS IS DENIED. Please try again.");
    }
    else if (numInput === teamNumber) {
        firstName = prompt("Enter your first name:");
        console.log(firstName);
        if (firstName === "Ravi" || firstName === "Joe" ||
            firstName === "Lovepreet" || firstName === "Rinzin") {
            loggedIn = true;
        }
    }
    else {
        loggedIn = false;
    }
    //CONNECT FIRST NAME TO LAST NAME
    if (firstName === "Ravi") {
        lastName = "Kumar";
    } else if (firstName === "Joe") {
        lastName = "Bonachea";
    } else if (firstName === "Lovepreet") {
        lastName = "Singh";
    } else if (firstName === "Rinzin") {
        lastName = "Tenzin";
    }
    //LOGIN SUCCESS OR FAILURE
    if (loggedIn === true) {
        alert("Welcome " + firstName + " " + lastName + "! You have successfully logged in.");
    }
    else {
        alert("ACCESS IS DENIED. Please try again.");
    }
}

