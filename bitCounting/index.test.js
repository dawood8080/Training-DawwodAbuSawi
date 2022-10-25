/**
 * Write a function that takes an integer as input,
 * and returns the number of bits
 * that are equal to one in the binary representation of that number.
 * You can guarantee that input is non-negative.
 * Example: The binary representation of 1234 is 10011010010,
 * so the function should return 5 in this case
 */

const bitCounting = (num) => {
  var bitCounter = 0;
  while(num) {
    var dividedBy = Math.floor(Math.log2(num));
    num -= Math.pow(2, dividedBy);
    bitCounter++;
  }
  return bitCounter;
};

describe('bitCounting', () => {
  it('should return the correct number of bits in the binary representation', () => {
    expect(bitCounting(1234)).toBe(5);
    expect(bitCounting(8)).toBe(1);
    expect(bitCounting(17)).toBe(2);
    expect(bitCounting(1)).toBe(1);
    expect(bitCounting(2047)).toBe(11);
  });
});
