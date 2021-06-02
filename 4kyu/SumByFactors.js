/***
Given an array of positive or negative integers

I= [i1,..,in]

you have to produce a sorted array P of the form

[ [p, sum of all ij of I for which p is a prime factor (p positive) of ij] ...]

P will be sorted by increasing order of the prime numbers. The final result has to be given as a string in Java, C#, C, C++ and as an array of arrays in other languages.

Example:
I = [12, 15]; //result = [[2, 12], [3, 27], [5, 15]]
[2, 3, 5] is the list of all prime factors of the elements of I, hence the result.

Notes:

It can happen that a sum is 0 if some numbers are negative!
Example: I = [15, 30, -45] 5 divides 15, 30 and (-45) so 5 appears in the result, the sum of the numbers for which 5 is a factor is 0 so we have [5, 0] in the result amongst others.

In Fortran - as in any other language - the returned string is not permitted to contain any redundant trailing whitespace: you can use dynamically allocated character strings.
ALGORITHMS  NUMBERS ARRAYS
*/

function sumOfDivided(lst) {
    const arr = [];
    lst.forEach(element => { 
        let num = Math.abs(element);
        let num2 = Math.abs(element); //num2 is the square root of num (after making sure positve number!)
        for (i = 2; i <= num2; i++) { //note that we are working now with the square root
            if (num % i === 0) {
                arr.push(i);
                do {
                    num = num / i;
                } while (num % i === 0 && num > 0)
            }
        }
    })

    const primeArr = [...new Set(arr)]; // eliminates duplicates
    primeArr.sort(function(a, b){return a - b});

    const newArr = primeArr.map( pnum =>  { // take each prime and go add up all the items that use it
        let sum = 0;
        lst.forEach(element => {
            if (element % pnum === 0) sum += element
        });
        return [pnum,sum];
    })
    return newArr;  
}

 /*
 describe("Tests", () => {
  it("test", () => {
Test.assertSimilar(sumOfDivided([12, 15]), [ [2, 12], [3, 27], [5, 15] ]);
Test.assertSimilar(sumOfDivided([15,21,24,30,45]), [ [2, 54], [3, 135], [5, 90], [7, 21] ]);
  });
});

*/

/* // alternative solution:
function sumOfDivided(lst) {
    if(lst.length == 0) { return []; }
    var m = Math.max.apply(null, lst.map(Math.abs)),
        primes = [],
        marked = Array(m+1);

    for(var i = 2; i <= m; ++i) {
        if(marked[i]) continue;

        var sum = 0, isMul = false;
        lst.forEach(function(n) { if(n % i == 0) { sum += n; isMul = true; } });
        if(isMul) primes.push([i, sum]);

        for(var j = 2*i; j <= m; j += i) {
            marked[j] = true;
        }
    }

    return primes;
}
*/

/* // alternative solution:
const sumOfDivided = a => a
  .reduce((r, e) => r.concat(getFactors(e)), [])
  .filter((e, i, a) => i === a.indexOf(e))
  .sort((x, y) => x - y)
  .map(x => [x, a.reduce((r, e) => r + (e % x ? 0 : e), 0)]);
 
const getFactors = n => {
  const factors = [];
  for (let i = 2, x = Math.abs(n); i <= x; i++)
    while (n % i === 0) {
      factors.push(i);
      n /= i;
    }
  return factors;
}
*/

/* // alternative solution
function sumOfDivided(lst) {
  var max = Math.max(...lst.map(x => Math.abs(x))),
      isPrime = x => {
        for(var i = 2; i*i<=x; i++) if (x%i === 0) return false;
        return true;
      };
  var sums = {};
  for (var i = 2; i<=max; i++) if (isPrime(i)) {
    lst.forEach(x => {
      if (x%i === 0) sums[i] = x + (sums[i]||0);
    });
  }
  return Object.keys(sums).map(i => [+i, sums[i]]);
}
 
*/