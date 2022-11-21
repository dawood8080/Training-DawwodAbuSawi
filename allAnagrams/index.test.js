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

// Complexity is O(n!)
const allAnagrams = function(string, prefix) {
  if(prefix.length === string.length) {
    result.push(prefix);
  }
  else {
    for ( var i = 0 ; i < string.length ; i++ ) {
      if (!mark[i]) {
        mark[i] = 1;
        allAnagrams(string, prefix + string[i]);
        mark[i] = 0;
      }
    }
  }
};

describe('Expect the function to return all the possibilities of the given string', () => {
  beforeEach(() => {
    result =[];
  })
  it('should be called and adding the possibilities in the array', () => {
    const mockCaseAnswer = ['abc','acb','bca','bac','cab','cba'];
    const expectedResults = allAnagrams('abc','');
    expect(expectedResults).toBe(undefined);
    expect(result.sort()).toStrictEqual(mockCaseAnswer.sort());
  })
  it('should be called and adding the possibilities for ab', () => {
    const mockCaseAnswer = ['ab','ba'];
    const expectedResults = allAnagrams('ab','')
    expect(expectedResults).toBe(undefined);
    expect(result.sort()).toStrictEqual(mockCaseAnswer.sort());
  })
  it('should be called and adding the possibilities for abcd', () => {
    const mockCaseAnswer = ['abcd','abdc','acbd','acdb','adbc','adcb','bacd','badc','bcad','bcda','bdac','bdca','cabd','cadb','cbad','cbda','cdab','cdba','dabc','dacb','dbac','dbca','dcab','dcba']
    const expectedResults = allAnagrams('abcd','');
    expect(expectedResults).toBe(undefined);
    expect(result.sort()).toStrictEqual(mockCaseAnswer.sort());
  })
})
