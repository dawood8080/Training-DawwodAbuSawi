/*
You have to create a function
that takes a positive integer number and returns the
next bigger number formed by the same digits:

Exanmples:
nextBigger(12)==21
nextBigger(513)==531
nextBigger(2017)==2071
If no bigger number can be composed using those digits, return -1:
nextBigger(9)==-1
nextBigger(111)==-1
nextBigger(531)==-1
*/

const nextBigger = function(num) {
    let stringNum = num.toString();
    stringNum = stringNum.split('')
    let swapIndex = -1;
    for(let i=stringNum.length-1 ; i >= 1 ; i--){
        if(stringNum[i] > stringNum[i-1]){
            swapIndex = i - 1;
            break;
        }
    }
    if(swapIndex === -1){
        return swapIndex;
    }

    if(swapIndex === stringNum.length-2){
        [stringNum[stringNum.length-2], stringNum[stringNum.length-1]] = [stringNum[stringNum.length-1], stringNum[stringNum.length-2]]
        return parseInt(stringNum.join(''))
    }

    let sortedSubArray = stringNum.slice(0, swapIndex+1).concat(stringNum.slice(swapIndex+1).sort((a, b) => a - b));

    return parseInt(sortedSubArray.join(''))
};

describe('nextBigger', () => {
    it('returns the next bigger number formed by the given number\'s digit', () => {
        expect(nextBigger(2017)).toBe(2071);
        expect(nextBigger(235)).toBe(253);
        expect(nextBigger(12)).toBe(21);
        expect(nextBigger(111)).toBe(-1);
        expect(nextBigger(9)).toBe(-1);
        expect(nextBigger(532)).toBe(-1);
        expect(nextBigger(59884848459853)).toBe(59884848453589);
        expect(nextBigger(21581957621)).toBe(21581951267);
    })
})
