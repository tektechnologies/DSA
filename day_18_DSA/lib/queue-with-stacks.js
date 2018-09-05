'use strict';

const Stack = require('../lib/stack');

class Queue {
   
  constructor() {
    this.data = new Stack();
    this.temp = new Stack();
  }

  enqueue(value) {
    if(!value){
      throw new Error('Null Node Error.');
    }
    this.data.push(value);  
  }

  dequeue() {

    if(this.data.length === 0){
      throw new Error('This deeQ is missing a Q');
    }

    let curr = this.data.head;

    while(curr !== null){
      this.temp.push(curr.value);
      this.data.pop();
      curr = curr.next;
    }
    
    this.temp.pop();
    
    curr = this.temp.head;

    while(curr !== null){
      this.data.push(curr.value);
      this.temp.pop();
      curr = curr.next;
    }

    // for(let i = 0; i <= this.data.length; i++){
    // // console.log(this.data.pop());
    //   this.temp.push(this.data.pop());
    // }

    // console.log(this.temp.pop());
    // this.temp.pop();

    // for(let i = 0; i <= this.temp.length; i++){
    //   this.temp.pop(this.data.push());
    // }
    
   
  }
  
  toArray(){
    return this.data.toArray();
  }


}

module.exports = Queue;