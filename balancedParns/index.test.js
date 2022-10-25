/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *	"())"
 */

function balancedParens(input) {
  var stack = new Array();
  var open = '([{';
  var close = ')]}';

  for( var i = 0 ; i < input.length ; i++) {
    var openParenIndex = open.indexOf(input[i]);
    if( openParenIndex > -1) {
      stack.push(openParenIndex);
    }
    else {
      var closeParensIndex = close.indexOf(input[i]);
      if( closeParensIndex > -1) {
        if( stack[stack.length-1] === closeParensIndex ) {
          stack.pop()
        }
        else {
          return false;
        }
      }
    }
  }
  return !stack.length;
}

describe('balancedParens', () => {
  it('should return true if the parentheses are balanced', () => {
    expect(balancedParens('{}()[]')).toBe(true);
    expect(balancedParens('[{({}()[])}]')).toBe(true);
  });

  it('should return false if the parentheses are not balanced', () => {
    expect(balancedParens('{})')).toBe(false);
    expect(balancedParens('))))')).toBe(false);
    expect(balancedParens('{')).toBe(false);
    expect(balancedParens(']')).toBe(false);
  })
});
