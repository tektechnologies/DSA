'use strict';

class Stack{
  constructor(){
    this.head = null;
    this.length = 0;
  }

  push(value){
    let newNode = {
      value: value,
      next: null,
    };
    if(!this.head){
      this.head = newNode;
      return;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }


  pop(){
    if(!this.head){
      return;
    }
    let result = this.head;
    this.head = this.head.next;
    this.length--;
    return this.head;
  }


  toArray(){
    let result = [];
    let current = this.head;

    while(current.next !== null){
      // console.log(current);
      result.push(current.value);
      current = current.next;
    } 
    result.push(current.value);
    return result;
  }
} 



module.exports = Stack;