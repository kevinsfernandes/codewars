/***
 *  Write a function called repeatStr which repeats the given string string exactly n times.
 * 
 * repeatStr(6, "I") // "IIIIII"
 * repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"
 * 
 *  codewars tags: FUNDAMENTALS
 * 
 */

/* // My original solution (before I knew about the repeat function)
function repeatStr (n, s) {
var str="";
for(var i=0; i < n; i++)
  str+=s;
  return str;
}
*/

function repeatStr (n, s) {
    return s.repeat(n);
  }

// optionally as one line:  const repeatStr = (n, s) => s.repeat(n)
