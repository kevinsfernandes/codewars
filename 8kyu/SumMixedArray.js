/*** 
https://www.codewars.com/kata/57eaeb9578748ff92a000009/train/javascript

8 kyu
Sum Mixed Array

Given an array of integers as strings and numbers, return the sum of the array values as if 
all were numbers.

Return your answer as a number.

Tags: FUNDAMENTALS STRINGS NUMBERS ARRAYS

 *****/


function sumMix(arr) {
    let sum = 0;
    for (i = 0; i < arr.length; i++) {
        sum += parseInt(arr[i], 10);
    }
    return sum;
}


// Alternate Solution
/***
 * uses reduce() and the unary operator to convert string to number.
 const sumMix = (arr) => arr.reduce((sum, n) => sum + (+n), 0);
 */