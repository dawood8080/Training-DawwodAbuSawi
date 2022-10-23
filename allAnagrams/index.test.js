/**
 * Given a single input string, write a function that outputs an array of strings with every possible
 * combination of letters.
 *
 * At first, don't worry about repeated (duplicate) strings.
 *
 * What time complexity is your solution?
 *
 * Extra credit: De-duplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

var mark = new Array();
var result = new Array();

const allAnagrams = function(string, prefix) {
  if(prefix.length === string.length) {
    result.push(prefix);
  }
  else {
    for ( var i = 0 ; i < string.length ; i++ ) {
      if ( mark[i] === 0 ) {
        mark[i] = 1;
        allAnagrams(string, prefix + string[i]);
        mark[i] = 0;
      }
    }
  }
};


var example = 'abcd';
var stringSize = example.length;
while(stringSize--) mark.push(0);

// Complexity is O(n!)
allAnagrams(example, '');

console.log('number of combination is:',result.length)
console.log(result.join(' '));