/*
Create a function named "rotate" that takes an array and returns a new one
with the elements inside rotated n spaces.
If n is greater than 0 it should rotate the array to the right.
If n is less than 0 it should rotate the array to the left.
If n is 0, then it should return the array unchanged.
Examples:
Should work on arrays of any data types:
rotate(['a', 'b', 'c'], 1)     // => ['c', 'a', 'b']
rotate([1.0, 2.0, 3.0], 1)     // => [3.0, 1.0, 2.0]
rotate([true, true, false], 1) // => [false, true, true]
var data = [1, 2, 3, 4, 5];
rotate(data, 1) // => [5, 1, 2, 3, 4]
rotate(data, 2) // => [4, 5, 1, 2, 3]
rotate(data, 5) // => [1, 2, 3, 4, 5]
rotate(data, 0) // => [1, 2, 3, 4, 5]
rotate(data, -1) // => [2, 3, 4, 5, 1]
rotate(data, -2) // => [3, 4, 5, 1, 2]
rotate(data, -5) // => [1, 2, 3, 4, 5]
The rotation shouldn't be limited by the indices available in the array.
Meaning that if we exceed the indices of the array it keeps rotating.
rotate(data, 7)     // => [4, 5, 1, 2, 3]
rotate(data, 11)    // => [5, 1, 2, 3, 4]
rotate(data, 12478) // => [3, 4, 5, 1, 2]
*/

const rotate = function(array, steps) {
  return steps < 0
    ?[...array.slice(Math.abs(steps) > 0 ? Math.abs(steps) % array.length : Math.abs(steps), array.length), ...array.slice(0, Math.abs(steps) > 0 ? Math.abs(steps) % array.length :Math.abs(steps))]
    :[...array.slice(array.length - (Math.abs(steps) % array.length), array.length), ...array.slice(0, array.length - (Math.abs(steps) % array.length))]
};

describe('rotate', () => {
  it('returns rotated array when steps > 0', () => {
    expect(rotate([1,2,3,4,5], 1)).toStrictEqual([5, 1, 2, 3, 4])
    expect(rotate([1,2,3,4,5], 2)).toStrictEqual([4, 5, 1, 2, 3])
    expect(rotate([1,2,3,4,5], 5)).toStrictEqual([1, 2, 3, 4, 5])
    expect(rotate([1,2,3,4,5], 7)).toStrictEqual([4, 5, 1, 2, 3])
  })

  it('returns rotated array when steps < 0', () => {
   expect(rotate([1,2,3,4,5], -1)).toStrictEqual([2, 3, 4, 5, 1])
   expect(rotate([1,2,3,4,5], -2)).toStrictEqual([3, 4, 5, 1, 2])
   expect(rotate([1,2,3,4,5], -5)).toStrictEqual([1, 2, 3, 4, 5])
  })

  it('returns the same array when number of steps is 0', () => {
    expect(rotate([1,2,3,4,5], 0)).toStrictEqual([1,2,3,4,5])
  })
})
