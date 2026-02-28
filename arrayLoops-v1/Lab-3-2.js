//LAB 3 - ARRAYS & LOOPS - PART 2


//TEAM MEMBER ARRAY
myTeam=["Ravi", "Joe", "Lovepreet", "Spencer", "Rinzin"]

//OUTPUT TEAM ARRAY TO JS CONSOLE
console.log (myTeam)

//REMOVE LAST MEMBER
//var newList = myTeam.pop();
console.log(myTeam.pop());

//ADD SEAN TO FRONT OF ARRAY
myTeam.unshift("Sean");
console.log (myTeam)

//REARRANGE THE ARRAY ALPHABETICALLY
console.log(myTeam.sort())

//OUTPUT REQUIRED MESSAGE TO JS CONSOLE
for (var i=0; i<myTeam.length; i++) {
    console.log (myTeam[i]);
}

//LOOP THROUGH ARRAY TO OUTPUT TEAM MEMBERS/NUMBERS TO JS CONSOLE
for (var i=0; i<myTeam.length; i++) {
    console.log ("# NUM " + (i+1) + " " + myTeam[i]);
}
