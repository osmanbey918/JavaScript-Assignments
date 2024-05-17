// write functions to solve following problems.

//  a)   Return the length of a given string.
/*
const str = "JavaScript";
function strLength(){
    return str.length;
}
console.log(strLength())
*/


//  b)   Concatenate two strings together.
/*
const str1 = "Java";
const str2 = "Script";
function ConcatStr() {
    return str1 + str2;
}
ConcatStr()
*/



//  c)   Determine if a given string is empty.
/*
const strGiven = " ";
function chekEmptyStr() {
    if (strGiven === " {
       console.log("Empty");
    }
    else {
        console.log("Non Empty");
    }
}
chekEmptyStr();
*/


//  d)   Count the number of vowels in a string.
/*
const str = "Education".toLowerCase();
let countt = 0;
function countVowels() {
    
    for (let i = 0; i < str.length; i++) {
        if (str[i] === a || str[i] === e || str[i] === i || str[i] === o || str[i] === u) {
            countt++;
        }
    }
     console.log(countt);
}
countVowels();
*/



//  e)   Reverse a given string.
/*
const strGiven = "JavaScript";
function reverseStr() {
    let revStr = "";
    for (let i = strGiven.length - 1; i >= 0; i--) {
        revStr += strGiven[i];
    }
    console.log(revStr);
}
reverseStr()
*/


//  f)   Check if a string is a palindrome.
/*
const givenString = "madam";
function palidromeChek() {
    let palidrome = "";
    for (let i = givenString.length - 1; i >= 0; i--) {
        palidrome += givenString[i];
    }
    if (palidrome === ienString) {
        console.log("The string is palidrome")
    }
    else {
        console.log("The string is not palidrome")
    }
}
palidromeChek()
*/


//  g)   Convert a string to uppercase.
/*
function upperCase(str) {
    let upperCasedStr = str.toUpperCase();
    return upperCasedStr;
}
const strGiven = "javascript is a case sensitive language";
console.log(upperCase(strGiven));
*/





//  h)   Find the first occurrence of a given character in a string.
/*
function chekOccurrence(str,char) {
    return str.indexOf(char);
}
const String = "javascript is a case sensitive language";
const targetChar = "e";
console.log(chekOccurrence(String,targetChar));
*/



//  i)   Replace all occurrences of a given character in a string with another character.
/*
function chekOccurrence(str,oldChar,newChar) {
    return str.replaceAll(oldChar, newChar);
}
const String = "javascript is a case sensitive language";
const oldChar = "a";
const newChar = "W";
console.log(chekOccurrence(String,oldChar,newChar));
*/





//  j)   Trim leading and trailing whitespace from a string.
/*
function removingSpace(Remove) {
    return Remove.trim();
}
const str = "     Hello My name:    ";
console.log(removingSpace(str));
*/



//  k)   Count the number of words in a string.
/*
function wordCount(strGiven) {
    let count = 1;
    for (let i = 0; i < strGiven.length; i++) {
        if (strGiven[i] === " " ) {
            count++;
        }
    }
    return count;
}
const str = "JavaScript is a case sensitive language.";
console.log(wordCount(str));
*/




//  l)   Check if a string contains only numeric characters.
/*
function chekStrONlyNumeric(strGiven) {
    let strInt = parseInt(strGiven);
    if (strInt == strGiven) {
        return "This string only contain numbers";
    }
    else {
        return NaN;
    }  
}
let string = "333889939";
console.log(chekStrONlyNumeric(string));
let strContainStr = "333889939 gel";
console.log(chekStrONlyNumeric(strContainStr));
*/



//  m)   Check if a string is a valid email address.
/*
function chekValidEmail(email) {
    const validEmail = email.slice(email.indexOf("@"), email.lastIndexOf("m") +1 )
    if (validEmail == "@gmail.com") {
        return email + " is a valid email address";
    }
    else {
        return false;
    }
}
const emailGiven = "JavaScript@gmail.com";
console.log(chekValidEmail(emailGiven));
*/




//  n)   Extract the domain name from a URL string.

/*
function extractDomainName(domain) {
    const domainName = domain.slice(domain.indexOf(".") + 1, domain.lastIndexOf("."))
    return domainName ;
}
const domainGiven = "https://www.amazon.com";
console.log(extractDomainName(domainGiven));
const domainGivenTwo = "https://www.w3schools.com";
console.log(extractDomainName(domainGivenTwo));
*/




//  o)   Convert a string into title case (the first letter of each word capitalized).
/*
function titleCase(strGiven) {
    strGiven = strGiven.trim();
    
    let reqStr = "";
    let capitalizeNext = true; 
  
    for (let i = 0; i < strGiven.length; i++) {
      if (strGiven[i] === " ") {
        reqStr += " "; 
        capitalizeNext = true; 
      } else {
        if (capitalizeNext) {
          reqStr += strGiven[i].toUpperCase(); 
          capitalizeNext = false;
        } else {
          reqStr += strGiven[i].toLowerCase(); 
        }
      }
    }
    return reqStr;
  }
  
  const str = "javaScript is a case sensitive language.";
  console.log(titleCase(str)); // Output: "Javascript Is A Case Sensitive Language."
  */





//  p)   Remove all non-alphabetic characters from a string.
/*
function removeNonAlphabetic(str) {
    return str.replace(/[^a-z A-Z]/g, ''); // Removes all non-alphabetic characters
  }
  
  const example = "Hello, 498684  World! 123";
  const cleanedString = removeNonAlphabetic(example);
  
  console.log(cleanedString);
  */


//  q)   Check if a string is a valid palindrome permutation (ignoring spaces).
/*
function isValidPalindromePermutation(str) {
    str = str.replace(/\s/g, '').toLowerCase();

    const charCount = {};
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    let oddCount = 0;
    for (let char in charCount) {
        if (charCount[char] % 2 !== 0) {
            oddCount++;
        }
    }
    return oddCount <= 1;
}

console.log(isValidPalindromePermutation("taco cat")); // true
console.log(isValidPalindromePermutation("A man a plan a canal Panama")); // true
*/
//  r)   Check if a string is an anagram of another string.

function isAnagram(str1, str2) {
    const cleanString = (str) => str.replace(/\s/g, '').toLowerCase();

    const sortString = (str) => cleanString(str).split('').sort().join('');

    return sortString(str1) === sortString(str2);
}

console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("Triangle", "Integral")); // true


//  s)   Find the longest word in a string.
/*
function findLongestWord(sentence) {
    // Split the sentence into words
    var words = sentence.split(/\s+/); // Split by spaces

    // Variable to keep track of the longest word
    var longestWord = "";

    // Iterate through each word
    for (var i = 0; i < words.length; i++) {
        var word = words[i];
        if (word.length > longestWord.length) {
            longestWord = word; // Update if the current word is longer
        }
    }

    return longestWord; // Return the longest word
}

// Test cases
console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); 
*/

//  t)   Perform string compression by replacing repeated characters with the character followed by the count.
