/**
 * adding custom functions into native array
 * 1- sort function
 * 2- get first element
 * 3- get last element
 * 4- search for value
 */

//  TODO

Array.prototype.sortFunction = function () {
    for(var i=0 ; i < this.length ; i++) {
        for (var j= 0; j < i; j++) {
            if(this[i] < this[j]) {
                var x = this[i];
                this[i] = this[j];
                this[j] = x;
            }
        }
    }
}

Array.prototype.getFirstElement = function () {
    return this[0];
}

Array.prototype.getLastElement = function () {
    return this[this.length-1];
}

Array.prototype.searchForValue = function (value) {
    var result;
    for (var i = 0 ; i < this.length ; i++) {
        if(this[i] === value) {
            result = i;
            break;
        }
    }
    return result || 'Not found';
}

describe('AddingCustomFunctions', () => {
    describe('sortFunction', () => {
        it('should sort an array', () => {
            var arr = new Array(1,3,5,0,3,8,11);
            var expectedArray = arr;
            expectedArray.sort();
            var returnedValue = arr.sortFunction();
            expect(returnedValue).toBe(undefined);
            expect(expectedArray).toBe(arr);
        })
    })

    describe('getFirstElement', () => {
        it('should return the first element', () => {
            var arr = new Array(1,3,5,0,3,8,11);
            expect(arr.getFirstElement()).toBe(1);
        })
    })

    describe('getLastElement', () => {
        it('should return the last element', () => {
            var arr = new Array(1,3,5,0,3,8,11);
            expect(arr.getLastElement()).toBe(11);
        })
    })

    describe('getLastElement', () => {
        it('should return the index of the given element', () => {
            var arr = new Array(1,3,5,0,3,8,11);
            expect(arr.searchForValue(8)).toBe(5);
        })
    })
})