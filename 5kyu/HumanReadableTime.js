
/*
  Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.

codewars tags:
ALGORITHMS  DATES/TIME MATHEMATICS NUMBERS
*/

// What I'd do differently: Using parseInt instead of Math.floor would be more precise way to do it. Also could have made a "pad" function for '0'
function humanReadable(seconds) {
  let hours = Math.floor (seconds / (60*60))
  let mins = Math.floor ( (seconds - (hours * 60 * 60)) / 60 )
  let secs = seconds - (mins * 60) - (hours * 60 * 60)
  //let mins = ((seconds - secs) / 60) % 60
  //let hours = (seconds - secs - (mins*60)) % (60*60)
  let str = '';
  if (hours < 10) str += '0'
  str += hours + '|'
  if (mins < 10) str += '0'
  str += mins + '|'
  if (secs < 10) str += '0'
  str += secs
  
  return (str)
}

/* // Alternate Solution:
function humanReadable(seconds) {
  var pad = function(x) { return (x < 10) ? "0"+x : x; }
  return pad(parseInt(seconds / (60*60))) + ":" +
         pad(parseInt(seconds / 60 % 60)) + ":" +
         pad(seconds % 60)
}
*/