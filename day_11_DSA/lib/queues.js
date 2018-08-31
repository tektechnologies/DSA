'use strict';

class Queue {
  constructor() {
    //for an empty queue
    this.head= null;
    this.tail = null;
  }

  enqueue(value) {
    let newNode = {
      value:value,
      next:null,
      prev:null,
    };

    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
      return;
    }
    this.head.prev = newNode;
    newNode.next = this.head;
    this.head =newNode;   
  }

  dequeue() {
  
    if(!this.tail){
      return;
    }
    this.tail = this.tail.prev;
    this.tail.next = null;
  }

  toArray(){
    let result = [];
    let current = this.head;

    while(current.next !== null){
      console.log(current);
      result.push(current.value);
      current = current.next;
    } 
    result.push(current.value);
    return result;
  }





}

module.exports = Queue;
















