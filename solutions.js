//=========================================
// Section 1
//=========================================

// 1. What is the difference between a parameter and an argument?
// The difference between Argument and Parameter is that Parameter is passed in
// the the function where Arguments are passed outside.
// 2. Within a function, what is the difference between return and console.log?
// Return is just returning the value of the function but not printing in in the
// console as a console.log would do.

//=========================================
// Palindrome
//=========================================

// Write a function checkPalindrome that accepts a single argument, a string. The
// function should return true (Boolean) if the string is a palindrome, false if it
// is not. Make sure your function will give the correct answer for words with
// capital letters.

const checkPalindrome = (str) => {
  str = str.toLowerCase().replace(/\W/g, "");
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] !== str[str.length - 1 - i]) {
      return `${str} is not a Palindrome`;
    }
  }
  return `${str} is a Palindrome`;
};
console.log(checkPalindrome("RADAR"));
console.log(checkPalindrome("mopar"));
console.log(checkPalindrome("A MAN, a plan, a CANAL, pAnAmA"));
console.log(checkPalindrome("RACEcar"));
console.log(checkPalindrome("Anna"));
console.log(checkPalindrome("GrandMa"));
console.log(checkPalindrome("catNip"));

//=========================================
// Sum Array
//=========================================

let sum = 0;

const sumfunc = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
  return sum;
};

sumfunc([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
sumfunc([2,4,6,8,-40,32]);

//=========================================
// 
//=========================================
