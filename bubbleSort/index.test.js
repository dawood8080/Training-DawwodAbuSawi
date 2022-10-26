/*
 * Bubble sort is the most basic sorting algorithm in all of Computer
 * Science dom. It works by starting at the first element of an array and
 * comparing it to the second element; if the first element is greater than the
 * second element, it swaps the two. It then compares the second to the third,
 * and the third to the fourth, and so on; in this way, the largest values
 * "bubble" to the end of the array. Once it gets to the end of the array, it
 * starts over and repeats the process until the array is sorted numerically.
 *
 * Implement a function that takes an array and sorts it using this technique.
 * Don't use JavaScript's built-in sorting function (Array.prototype.sort).
 *
 * QUERY: What's the time complexity of your algorithm? If you don't already
 * know, try to intuit this without consulting the Googles.
 *
 * Extra credit: Optimization time! During any given pass, if no elements are
 * swapped we can assume the list is sorted and can exit the function early.
 * After this optimization, what is the time complexity of your algorithm?
 *
 * More credits: Do you need to consider every element every time you iterate
 * through the array? Again: Has the time complexity of your algorithm changed?
*/

const a = [34, 203, 3, 746, 200, 984, 198, 764, 9];
/*
 * Example usage:
 * bubbleSort([2, 1, 3]); // yields [1, 2, 3]
 *
*/

// Feel free to add helper functions if needed

/**
 * This function returns true if the array is sorted, otherwise it returns false
 * @param {Array} array the required array to check
 * @returns {boolean}
 */
const checkSortedFunction = (array) => {
    for(var i=1;i<array.length;i++) {
        if(array[i]<array[i-1]){
            return false;
        }
    }
    return true;
}

/**
 * This function sort the array using bubble sort algorithm.
 * Time complexity before ignoring the last element every iteration is O(n^2)
 * Time complexity after ignoring the last element every iteration is n*(n-1)/2 = O(n^2)
 * Time complexity if the array is sorted is O(n), which is the best case
 * @param {Array} array the required array to check of sorted or not
 * @returns {Array}
 */
const bubbleSort = (array) => {
    if(checkSortedFunction(array)) {
        return array;
    }
    for( var i = 0 ; i < array.length ; i++) {
        for( var j = 1 ; j < array.length - i ; j++) {
            if(array[j]<array[j-1]) {
                [array[j], array[j-1]] = [array[j-1], array[j]]; //swap
            }
        }
    }
    return array;
};

describe('bubbleSort', () => {
    it('should return a sorted array', () => {
        expect(bubbleSort([1,0,4,3,9])).toStrictEqual([0,1,3,4,9]);
        expect(bubbleSort([1,2,3,4])).toStrictEqual([1,2,3,4]);
    })
})

describe('checkSortedFunction', () => {
    it('should return true if the array is sorted', () => {
        expect(checkSortedFunction([1,2,3,4])).toBe(true);
    });

    it('should return false if the array is not sorted', () => {
        expect(checkSortedFunction([1,5,2,4])).toBe(false);
    })
});
