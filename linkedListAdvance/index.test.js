/*
 * Implement a linked list using the pseudoclassical instantiation pattern.
 *
 * https://medium.com/@taylorshephard1/instantiation-patterns-in-javascript-7f9463b95839
 *
 * Your linked list should have methods called "addToTail", "removeHead", and "contains."
 *
 */

// EXAMPLE USAGE:
// const list = new LinkedList();
// list.tail;         //yields 'null'
// list.addToTail(4);
// list.addToTail(5);
// list.head.value;   //yields '4';
// list.contains(5);  //yields 'true';
// list.contains(6);  //yields 'false';
// list.removeHead(); //yields '4'
// list.tail.value;   //yields '5';

class Node {
  constructor(value = null) {
    this.value = value;
    this.next = null;
  }
}

const LinkedList = function(){
    this.head = null;
    this.tail = null;
};

// write methods here!

LinkedList.prototype.addToTail = function(value = null){
  const node = new Node(value);
  if(this.head === null){
    this.head = node;
    this.tail = node;
  } else {
    this.tail.next = node;
    this.tail = node;
  }
}

LinkedList.prototype.removeHead = function(){
  const removedValue = this.head.value;
  this.head = this.head.next;
  return removedValue;
}

LinkedList.prototype.contains = function(value){
  count = 0;
  let curr = this.head;
  while(curr){
    if(curr.value === value){
      return true;
    }
    curr = curr.next;
  }
  return false;
}

describe('LinkedList', () => {
  const list = new LinkedList();
  it('returns the required value for each method', () => {
    expect(list.tail).toBe(null);
    list.addToTail(4);
    list.addToTail(5);
    expect(list.head.value).toBe(4);
    expect(list.contains(5)).toBe(true);
    expect(list.contains(6)).toBe(false);
    expect(list.removeHead()).toBe(4);
    expect(list.tail.value).toBe(5);
    expect(list.removeHead()).toBe(5);
  })
})
