//#### LAB 5 - FUNCTIONS & OBJECTS ####
//PART 1:  I OBJECT!
var meObject = {
    hairColor: "Black",
    age: 28, 
    hasAppendix: true,
    irrationalFears: ["flying ", "being buried alive ", "aphasia "],
    overshareInformation: function(){
        alert("Hello! I am " + meObject.age + " years old! I am deathly afraid of: " + meObject.irrationalFears);
    }
}
console.log(meObject.hasAppendix)
// alert("Hello! I am " + meObject.age + " years old! I am deathly afraid of: " + meObject.irrationalFears)
meObject.overshareInformation();