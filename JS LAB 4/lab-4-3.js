//#### LAB 4 - FUNCTIONS ####
//PART 3:  WALKING THE DOG 


//################## CREATE YOUR checkTemp FUNCTION

//This function will prompt the user for an input (integer) to define the temperature. checkTemp 
function checkTemp(actualTemp) {


    //It expects to receive an integer value greater than 30 in this 
    if (actualTemp > 30 || actualTemp < -10) {
        // It will return a boolean to check whether its above 30 OR under -10,
        // which will then permit it to interface with my if statement below through the 
        // checkTemp function, returning false or true.
        
        return false;
    } else {
        return true;
    }
}



//################## LOGIC THAT OUTPUTS MESSAGES BASED ON FUNCTION RESULTS
var actualTemp = prompt("How hot is it out there today?")
if (checkTemp(actualTemp) === false) {
    alert("Yikes! This is no weather for dog walking!");
} else {
    alert("Adequate dog walking temperature! Enjoy!");
}