/*
The following iterative sequence is defined for the set of positive integers:
n → n/2 (n is even)
n → 3n + 1 (n is odd)
Using the rule above and starting with 13, we generate the following sequence:
13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms.
Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.
Which starting number, under one million, produces the longest chain?
NOTE: Once the chain starts the terms are allowed to go above one million.
*/

/**
 * Wiki link
 * https://en.wikipedia.org/wiki/Collatz_conjecture
 */

/**
 * What is the time complexity for your solution ?
 */

/**
 * Write the unit tests that cover your solution
 */



/**
 * this function calculates the Collatz Conjecture of the given number
 * We can find the complexity of each case by calculating number of steps
 * We can try to calculate the worst case of each multiple of 10
 * worst case for numbers less than 10 is 19 steps (which is 9), less than 10^2 is 118, less than 10^3 is 178, less than 10^4 is 261
 * we will try to take logBase10 for each case, take the average of that and then the complexity will be 10 ^ result.
 * I assumed that the input wont be more that 10^9.
 * average = 22.03/9 = 1.15. so the worst case of n when n < 10^9 is O(10^1.15)
 * @param {Number} number  the given number to get number of steps
 * @returns {Array}
 */
function collatzSeq(number) {
    let temp = number;
    let sequence = new Array();
    sequence.push(number);

    while(temp != 1){
        if(temp % 2 == 0){
            temp /= 2;
        }
        else{
            temp = temp*3 + 1;
        }
        sequence.push(temp)
    }
    return sequence;
}

describe('collatzSeq', () => {
    it('returns Collatz Conjecture sequence of the given number', () => {
        expect(collatzSeq(13)).toStrictEqual([13 ,40, 20, 10, 5, 16, 8, 4, 2, 1]);
        expect(collatzSeq(27)).toStrictEqual([
            27, 82, 41, 124, 62, 31, 94, 47, 142, 71, 214, 107, 322, 161, 484, 242,
            121, 364, 182, 91, 274, 137, 412, 206, 103, 310, 155, 466, 233, 700, 350,
            175, 526, 263, 790, 395, 1186, 593, 1780, 890, 445, 1336, 668, 334, 167,
            502, 251, 754, 377, 1132, 566, 283, 850, 425, 1276, 638, 319, 958, 479,
            1438, 719, 2158, 1079, 3238, 1619, 4858, 2429, 7288, 3644, 1822, 911,
            2734, 1367, 4102, 2051, 6154, 3077, 9232, 4616, 2308, 1154, 577, 1732,
            866, 433, 1300, 650, 325, 976, 488, 244, 122, 61, 184, 92, 46, 23, 70,
            35, 106, 53, 160, 80, 40, 20, 10, 5, 16, 8, 4, 2, 1
        ]);
        expect(collatzSeq(6171).length).toBe(262);
        expect(collatzSeq(97).length).toBe(119);
    });
});
