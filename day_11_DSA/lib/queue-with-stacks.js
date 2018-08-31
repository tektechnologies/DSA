'use strict';

const PushPopStack = require('../lib/push-pop');

class Queue {
  
  constructor() {
    this.value = new PushPopStack();
  }

  enqueue(value) {
    if(!value){
      throw new Error('Null Node Error.');
    }
    this.value.push(value);
  }

  dequeue() {
   
  }

  
}

module.exports = Queue;