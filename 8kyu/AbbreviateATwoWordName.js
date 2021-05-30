/****
 * Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

Patrick Feeney => P.F

FUNDAMENTALS    STRINGS     ARRAYS
 */

function abbrevName(name){
    arr = name.split(' ');
    return (arr[0].charAt(0).toUpperCase() + '.' + arr[1].charAt(0).toUpperCase())
    // alternate way to write it:
    // return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();

    // 1 line return solution to function:
    //     return name.split(' ').map(i => i[0].toUpperCase()).join('.')
}

// 1 line solution for the whole function:
// const abbrevName = name => name.match(/\b\w/g).join('.').toUpperCase()
