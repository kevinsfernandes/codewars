/**
 * Complete the solution so that it reverses all of the words within the string passed in.

Example:

"The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"
ALGORITHMS  STRINGS
 */

function reverseWords(str){
    let arrWords = words.split(' ')
    let tempStr = ''
    for (i = arrWords.length - 1; i >= 0; i--) {
        tempStr += `${arrWords[i]}${ i > 0 ? ' ' : ''}`
    }
    return tempStr
}

/* // alternate  solution:
function reverseWords(str){
    return str.split(' ').reverse().join(' ');
  }
*/

/* // optimal solution:
const reverseWords = (str) => str.split(" ").reverse().join(" ");
*/