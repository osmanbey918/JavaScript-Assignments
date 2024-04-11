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

let num = 8;
for (let i = 1; i <= num; i++) {
    let pattern = ''; //  an empty string for the pattern
    for (let j = 1; j <= i; j++) {
        pattern += j;
    }
    console.log(pattern); 
}
