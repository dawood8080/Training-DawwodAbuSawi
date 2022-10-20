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

var arr = new Array(1,3,5,0,3,8,11)


arr.sortFunction();

console.log(arr.join(' '));

console.log(arr.getFirstElement());

console.log(arr.getLastElement());

console.log(arr.searchForValue(8));