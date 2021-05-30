/***
 Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
FUNDAMENTALSSTRINGS
 */

/* // my original solution 
function solution(str, ending){
  return str.substr(-ending.length) == ending;
}
*/
// I suspect the following solution wasn't possible when the original kata was made.
const solution = (str, ending) => str.endsWith(ending);