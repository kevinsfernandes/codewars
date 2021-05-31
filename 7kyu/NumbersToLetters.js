/***
 * Given an array of numbers (in string format), you must return a string. The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.

All inputs will be valid.

FUNDAMENTALS    STRINGS NUMBERS  ARRAYS
*/


function switcher(x){
    // next line takes a string and reverses it and makes sure z is at index 1.
    const alphabet = ' ?!abcdefghijklmnopqrstuvwxyz '.split('').reverse().join('');
    // takes every array (item), converts it to number and then adds that indexed character of string above to string that gets returned
    return ( x.reduce( (str, item) => {return (str + alphabet[Number(item)])}, '' ) )
}

/*  // alternate solution
const alpha = ' zyxwvutsrqponmlkjihgfedcba!? '
const switcher = x => x.map(item => alpha[item]).join('')
*/

/* // alternate solution
function switcher(x)
{
  return x.map(a => 
    {
      if(a == 27) return "!";
      if(a == 28) return "?";
      if(a == 29) return " ";
      return String.fromCharCode(97 + 26 - parseInt(a));
      
    }).join('');
}
*/

/* // alternate solution
const switcher=x=>x.reduce((a,b)=>a+" ?!abcdefghijklmnopqrstuvwxyz"[29-b],"")
*/

