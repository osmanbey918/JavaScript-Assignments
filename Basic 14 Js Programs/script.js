//1. A js program to find the maximum between two numbers.

/*
let number1 = prompt("enter number1");
let number2 = prompt("enter number2");
if (number1 > number2) {
    alert(`${number1} is max`)
    
} else if (number1 == number2) {
    alert(`both are equal`)
} else {
    alert(`${number2} is max`)
}  
*/ 


/*
Write a js program to find the maximum between three numbers

*/
let number1 = prompt("enter first number");
let number2 = prompt("enter second number");
let number3 = prompt("enter third number");

if (number1 > number2 && number1 > number3) {
    alert(`${number1} is maximum`)
}

if (number1 > number2 && number1 > number3) {
    alert(`${number1} is maximum`)  
}

else if (number2 > number1 && number2 > number3) {
    alert(`${number2} is maximum`)   
}


else if (number3 > number1 && number3 > number2) {
    alert(`${number3} is maximum`)   
}

else if (number1 == number2 && number1 == number3) {
    alert(`All are equal`)
} 

else {
    alert(`This is not a number`)
}   
