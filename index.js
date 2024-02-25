alert("Wellcome to My Ticket Booth")
var age = prompt("Enter your age:");
var isStudent = prompt("Are you a student? (yes/no)");

var ticketPrice;

if (age < 12) {
    ticketPrice = 5;
} else if (age >= 12 && age <= 18) {
    if (isStudent === "yes") {
        ticketPrice = 8;
    } else {
        ticketPrice = 10;
    }
}    
    else if (age >= 18 && age <= 30){
        if (isStudent === "yes") {
            ticketPrice = 12;
        } 
        else {
           ticketPrice = 15;
       }
    }
alert("The ticket price is: $" + ticketPrice)