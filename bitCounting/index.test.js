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
