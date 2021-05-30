/***
 * Task:
Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).

Examples:
Input: [0]
Output: "even"

Input: [0, 1, 4]
Output: "odd"

Input: [0, -1, -5]
Output: "even"
Have fun!

codewars tags:
FUNDAMENTALS    ARITHMETIC  MATHEMATICS   ALGORITHM  SNUMBERS  ARRAYS
 */
function oddOrEven(array) {
    let total = 0
    
    if (array.length === 0)
      return "even"

    total = array.reduce(addVals, 0)
    
    if (total % 2 === 0) return "even"
    return "odd"
 }
 function addVals(total, item){
     total += Math.abs(item)
     return total
 }

 /* // alternate solution
 function oddOrEven(arr) {
  return arr.reduce((a,b)=>a+b,0) % 2 ? 'odd' : 'even';
}
*/