/***
 * 
 *  https://www.codewars.com/kata/52449b062fb80683ec000024/javascript
 * 
 * 
 * The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
Examples
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false
Tags: ALGORITHMS STRINGS
 */

function generateHashtag (str) {
    if (str.length  < 1 ) return false;

    let hashStr = '#'
    let strArr = str.split(' ');
    if (strArr.length == null) return false;

    strArr.forEach(el => {
        el =  el.charAt(0).toUpperCase() + el.slice(1);
        if (el.charAt(0) != ' ')
            hashStr += el;
    });
    
    if (hashStr.length == 1 || hashStr.length > 140) return false;
    else return hashStr
}

// Alternate Solution
/*
function generateHashtag (str) {
  return str.length > 140 || str === '' ? false :
    '#' + str.split(' ').map(capitalize).join('');
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
*/