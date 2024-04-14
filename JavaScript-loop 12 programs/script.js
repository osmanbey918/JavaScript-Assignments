//loop exercise Assignment -- 8

/*
// 1. a code to print numbers from 1 - 10.
for (let index = 1; index < 11; index++) {
    console.log(index);
}
*/


/*
// 2. a code to print even numbers from a given array.
const givenArray = [1, 250, 333, 9, 8, 0, 6, 66, 98, 77, 55, 33, 11, 25, 99];
for (let index = 0; index < givenArray.length; index++) {
    if (givenArray[index] % 2 === 0) {
        console.log(givenArray[index]);
    }
}
*/

/*
// 3. a code to delete all occurence of element in given array.
let givenArray = [1, 2, 4, 250, 333, 2, 9, 8, 2, 0, 6, 66, 98, 77, 2, 55, 33, 11, 25, 2, 99];
const target = 2;
for (let index = 0; index < givenArray.length; index++) {
    if (givenArray[index] === target) {
        givenArray.splice(index, 1);
                index--; // Decrement i to adjust for the removed element
    }
}
console.log(givenArray);
*/

/*
//4.  a code  to find the power of number using for loop
let number = 2;
let power = 8;
let result = 1;
for (let i = 0; i < power; i++) {
    result = result*number;
}
console.log(result);
*/



// 5. a code to print pattern using for loop
/*
1
12
123
1234
12345
123456
1234567
12345678
*/
/*
let num = 8;
for (let i = 1; i <= num; i++) {
    let pattern = ''; //  an empty string for the pattern
    for (let j = 1; j <= i; j++) {
        pattern += j;
    }
    console.log(pattern); 
}
*/



/*
// 6. a JS code to find no of digits in a number.
const num = 1223455;
const noOfDigits = num.toString().length;
console.log(noOfDigits + ' digits in the number')
*/



/*
// 7.  a js code to calculate sum of digits in a number.
const num = 1223455;
let sum = 0;
const numString = num.toString();

for (let i = 0; i < numString.length; i++) {
    sum += parseInt(numString[i]);
}
console.log("Sum of digits:", sum); 
*/




/*
// 8. a js code to find the largest number in an array.

let givenArray = [1, 56, 78, 90, 88, 34, 73, 57, 9, 45];
let largest = givenArray[0]
for (let i = 1; i < givenArray.length; i++) {
    if (givenArray[i] > largest) {
        largest = givenArray[i];
    }
}
console.log(largest , ' largest')
*/


/*
// 9.  a js code to print the fibonacci series for a given value of N

const N = 10; // The value of N
let fibSeries = [0, 1]; // Initialize the series with the first two Fibonacci numbers

for (let i = 2; i <= N; i++) {
    fibSeries[i] = fibSeries[i - 1] + fibSeries[i - 2]; // Generate the next Fibonacci number
}

console.log("Fibonacci series up to", N, ":", fibSeries.slice(0, N + 1)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
*/




/*
// 10. a js code to find duplicate values in array

const array = [1, 2, 3, 4, 5, 2, 7, 8, 8, 9, 1];
let duplicates = [];

for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
        if (array[i] === array[j] && !duplicates.includes(array[i])) {
            duplicates.push(array[i]);
            break;
        }
    }
}

console.log("Duplicates:", duplicates); // Output: [2, 8, 1]
*/




/*
// 11.Write a JS code for Linear search algorithm

const array = [5, 3, 8, 6, 2, 9, 4];
const target = 6;
let index = -1;

for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
        index = i;
        break;
    }
}

if (index !== -1) {
    console.log(`Target ${target} found at index ${index}`);
} else {
    console.log(`Target ${target} not found in the array`);
}
*/



/*
// 12. Write a JS code for Binary search algorithm
const array = [2, 4, 6, 8, 10, 12, 14, 16];
const target = 6;
let low = 0;
let high = array.length - 1;
let index = -1;

while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    
    if (array[mid] === target) {
        index = mid;
        break;
    } else if (array[mid] < target) {
        low = mid + 1;
    } else {
        high = mid - 1;
    }
}

if (index !== -1) {
    console.log(`Target ${target} found at index ${index}`);
} else {
    console.log(`Target ${target} not found in the array`);
}
*/
