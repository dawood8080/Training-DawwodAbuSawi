/**
 * adding custom functions into native array
 * 1- sort function
 * 2- get first element
 * 3- get last element
 * 4- search for value
 */

//  TODO

Array.prototype.sortFunction = function sortFunction() {
    for(var i=0 ; i < arr.length ; i++) {
        for (var j= 0; j < i; j++) {
            if(arr[i] < arr[j]) {
                var x = arr[i];
                arr[i] = arr[j];
                arr[j] = arr[i];
            }
        }
    }
}

Array.prototype.getFirstElement = function getFirstElement() {
    return this[0];
}

Array.prototype.getLastElement = function getLastElement() {
    return this[this.length-1];
}

Array.prototype.searchForValue = function searchForValue(value) {
    var result;
    for (var i = 0 ; i < this.length ; i++) {
        if(this[i] === value) {
            result = this[i];
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

console.log(arr.searchForValue(99));