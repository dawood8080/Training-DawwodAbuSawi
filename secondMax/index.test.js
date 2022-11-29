/*
You have to create a function
that takes an array of integer number and returns the
second max in the array:

Note : using sort native is not allowed

Exanmples:
secondMax([1,5, 2])== 2
secondMax([-1, -5, 2])== -1
*/

const secondMax = function(array) {
  let mx = array[0]
  let mx2 = mx
  for( let i = 1 ; i < array.length ; i++ ){
    if(array[i] > mx){
      mx2 = mx
      mx = array[i]
    }else if(array[i] > mx2){
      mx2 = array[i]
    }
  }
  return mx2
};

describe('secondMax', () => {
  it('returns the second maximum number in the given array', () => {
    expect(secondMax([1, 5, 2])).toBe(2)
    expect(secondMax([-1, -5, 2])).toBe(-1)
    expect(secondMax([0, -1, 4, 5, 3, 9])).toBe(5)
    expect(secondMax([1, 1])).toBe(1)
  })
})