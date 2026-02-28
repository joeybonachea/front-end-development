//#### LAB 4 - FUNCTIONS ####
//PART 2:  AN AVERAGE FUNCTION


//################## CREATE YOUR AVERAGE FUNCTION
//This function takes five numbers and returns their average to one decimal place.
function numericalAvg(num1, num2, num3, num4, num5) {
    var numericalAvg = (num1 + num2 + num3 + num4 + num5) / 5;
return numericalAvg.toFixed(1)}


//################## LOGIC THAT OUTPUTS MESSAGES BASED ON FUNCTION RESULTS
console.log(numericalAvg(5, 10, 15, 20, 25));
var classAvg1 = 85;
var classAvg2 = 45;
var classAvg3 = 92;
var classAvg4 = 77;
var classAvg5 = 66;
var gpa = numericalAvg (classAvg1,classAvg2,classAvg3,classAvg4,classAvg5)
if (gpa >= 70) {
    alert("Welcome to MENSA.");
} else {
    alert("Review required!!!");
}   