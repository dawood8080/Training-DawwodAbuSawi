/*
Problem 1:
Replace the native Array map function with your own.
It should work exactly the same way as Javascript built-in map function.
The map function works on the array and returns back a new array
where each element has been modified according to the results
of calling the callback function.
See example usage to understand what arguments are passed to the callback.
*/

Array.prototype.map = function(callback) {
  let tempArray = [];
  for(let i = 0 ; i < this.length ; i++ ){
    tempArray.push(callback(this[i], i, this));
  }
  return tempArray;
};

var transform = function(element,index,array){
  return array[index] + index + element;
};

describe('Array.prototype.map', () => {
  it('Iterates through array elements applying passed function for each one', () => {
    expect(['a','b','c'].map(transform)).toStrictEqual(['a0a','b1b','c2c']);
  });
})

/*
Problem 2:
Write an asynchronous sum function that accepts two numbers and a callback.
The function should wait 1 second, then calculate the sum of two numbers
and pass the result to the callback.
If 1st or 2nd argument is not a number, the function should call the callback
with the error message - a simple string that says "Incorrect argument(s)".
Please see example usage to understand what should be passed to the callback.
*/

const asyncSum = function(a, b, callback) {
  setTimeout(() => {
    if(typeof a !== 'number' || typeof b !== 'number'){
      callback('Incorrect argument(s)', a + b);
    } else {
      callback(null, a + b);
    }}, 1000);
};

/*
Example use:
*/

const logNumber = function(error, number) {
  if (error) {
    return 'Error: ' + error;
  } else {
    return 'The total is: ' + number;
  }
};

/*
asyncSum(10,7,logNumber);//should print "The total is: 17" after 1 second
asyncSum(10,"B",logNumber);
//should print "Error: Incorrect argument(s)" after 1 second
*/

describe('asyncSum', () => {
  it('gets the callback function summation without errors', () => {
    asyncSum(1, 2, (error, sum)=>{
      expect(error).toBe(null);
      expect(sum).toBe(sum);
    });
  });
  it('gets the callback function with error with text: \'Incorrect argument(s)\'', () => {
    asyncSum(1, '2', (error, sum)=>{
      expect(error).toBe('Incorrect argument(s)');
      expect(sum).toBe('12');
    });
  })
});

/*
Problem 3 (ADVANCED):
What kind of candy do you like?
Your answer: any kind of chocolate
*/
