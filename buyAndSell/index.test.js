/*
*
* Given an array representing prices of the stock on different days,
* find the maximum profit that can be earned by performing maximum of
* one transaction. A transaction consists of activity of buying and
* selling the stock on different or same days.
*
*/

/*
*
* For example in this array - [100, 80, 120, 130, 70, 60, 100, 125]
* the price of the stock on day-1 is 100, on day-2 is 80 and so on.
* The maximum profit that could be earned in this window is 65
* (buy at 60 and sell at 125).
* For price array - [100, 80, 70, 65, 60, 55, 50], maximum profit
* that could be earned is 0.
*
*/

// Feel free to add helper functions if needed
function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}
function getMinOfArray(numArray) {
  return Math.min.apply(null, numArray);
}

const maximumProfit = function(array) {
  let mx = -1;
  let earning = 0;

  for ( var i = 1 ; i < array.length ; i++ ) {
    earning = getMaxOfArray(array.slice(i, array.length)) - array[i];
    mx = earning > mx ? earning : mx;
  }

  return mx;
};

describe('maximumProfit', () => {
  it('should return the maximum profit in the days', () => {
    expect(maximumProfit([100, 80, 120, 130, 70, 60, 100, 125])).toBe(65);
    expect(maximumProfit([100, 80, 70, 65, 60, 55, 50])).toBe(0);
    expect(maximumProfit([100, 60, 50, 120, 30, 190])).toBe(160);
    expect(maximumProfit([40,40])).toBe(0);
  })
})
