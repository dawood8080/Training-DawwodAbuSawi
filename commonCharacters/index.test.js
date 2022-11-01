/**
 * Write a function `commonCharacters(str1, str2)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `str1`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */

const commonCharacters = (str1, str2) => {
  const map = new Map();
  let common = '';

  for(let i = 0 ; i < str1.length ; i++){
    let temp = map.get(str1[i]);
    map.set(str1[i], temp ? ++temp : 1);
  }

  for(let i = 0 ; i < str2.length ; i++){
    let temp = map.get(str2[i]);
    map.set(str2[i], temp ? ++temp : 1);
  }

  map.forEach((value, key) => {
    common += (value >= 2 ? key : '');
  });

  return common;
};

const commonCharacters2 = (...str) => {
  const map = new Map();
  let common = '';
  let args = 0;

  for (let word of str) {
    for(let i = 0 ; i < word.length ; i++){
      let temp = map.get(word[i]);
      map.set(word[i], temp ? ++temp : 1);
    }
    args++;
  }

  map.forEach((value, key) => {
    common += (value >= args ? key : '');
  });

  return common;
}


describe('commonCharacters', () => {
  it('returns the common characters between two strings', () => {
    expect(commonCharacters('acexivou','aegihobu')).toBe('aeiou');
    expect(commonCharacters('hello','goodbye')).toBe('elo');
    expect(commonCharacters('abdc', 'efgh')).toBe('');
  })
})

describe('commonCharacters2', () => {
  it('returns the common characters in the passed strings', () => {
    expect(commonCharacters2('acexivou','aegihobu','io','ooo')).toBe('o');
    expect(commonCharacters2('hello','goodbye','hola')).toBe('lo');
    expect(commonCharacters2('abdc', 'efgh', '', 'no')).toBe('');
  })
})
