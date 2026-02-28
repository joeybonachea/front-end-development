//VARIABLES AND ARRAY
var movie1 = "Synecdoche, New York";
var movie2 = "Stalker";
var movie3 = "Chungking Express";
var movie4 = "Wild Strawberries";
var movie5 = "Memories of Underdevelopment";
var movie6 = "The Act of Killing";
var movie7 = "Marmaduke 2";
var movieList = [movie1, movie2, movie3, movie4, movie5, movie6, movie7];
var userInput = 0;

//WHILE LOOP LOGIC, KEEP ASKING UNTIL 1-7 
while (isNaN(userInput) || userInput < 1 || userInput > 7) {
    userInput = parseInt(prompt("Which top 7 movie would you like?", "Pick a number: 1-7"));

    if (isNaN(userInput) || userInput < 1 || userInput > 7) {
        alert("Please enter a number between 1 and 7!");
    }
}
//AFTER INPUT HAS BEEN VALIDATED DISPLAY POP UP ALERT
alert("Number " + userInput + " on the list is " + movieList[userInput - 1]);

//LOG MOVIES IN CONSOLE AS A NICE LOOKING LIST
for (var i = 1; i <= 7; i++) {
    console.log("Movie " + i + ": " + movieList[i - 1]);
}
