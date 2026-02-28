//#### LAB 5 - FUNCTIONS & OBJECTS ####
//PART 2:  MAKE THE BANK
//1. Create the object structure first.
var customer = {
    
//2. Add the required properties to your object.
    lastName: "Smith",
    branchNumber: 42, 
    accountBalance: 500.25,
    interestRate: 1.03,
    multipleAccounts: false,
//3. Add your first method and test it. Remember, the methods will change the properties of the object.
 makeDeposit: function(newTotal){
        customer.accountBalance += newTotal
        return "Thanks! Your new total is $ " + customer.accountBalance.toFixed(2)
    },
//4. Add your second method and test it.
makeWithdrawal: function(newTotal){
        customer.accountBalance -= newTotal
        return "Thanks! Your new total is $ " + customer.accountBalance.toFixed(2)
    },
addInterest: function(){
        if (customer.multipleAccounts === true){
            customer.accountBalance *= (customer.interestRate + 0.005);
            
        } else {
            customer.accountBalance *= customer.interestRate;
        }
         return "Thanks! Your new total AFTER INTEREST is $" + customer.accountBalance.toFixed(2) + ". Next time don't try to game the system!";

    
    
}

}

//5. Create the required output to complete steps 6-10 of the lab.
console.log("Starting balance: $" + customer.accountBalance.toFixed(2));
console.log(customer.makeDeposit(200));
console.log(customer.makeWithdrawal(75));
console.log(customer.addInterest());

//6. Once everything is working, tackle the Stretch Goal!



