'use strict';

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}





class PushPopStack {
  constructor() {
    this.head = null;
    this.count = 0;
  }

  push(value) {
    //creat new node
    let newHead = new Node(value);
    //make .next of new head this.head,
    newHead.next = this.head;
    //now make the new head this.head
    this.head = newHead;
    this.count++;
  }

 

  pop() {
    this.count--;
    return this.values.pop();
  }

 
}

module.exports = PushPopStack;