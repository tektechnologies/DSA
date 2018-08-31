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
    if(!value){
      throw new Error('Push a Value.');
    }
    //creat new node
    let newHead = new Node(value);
    //make .next of new head this.head,
    newHead.next = this.head;
    //now make the new head this.head
    this.head = newHead;
    this.count++;
  }

 

  pop() {
    if(!this.head){
      throw new Error('Stack is empty');
    }
    let curr = this.head;
    //check for null
    if(curr === null){
      return 'No Nodes in List.';
    }
    //set the th
    curr = this.head.next;
    this.count--;
    return curr.value;
  }
}

 
module.exports = PushPopStack;