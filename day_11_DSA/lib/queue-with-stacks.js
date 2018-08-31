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

  dequeue(value) {
    let deeQ = this.tail;
    if(!deeQ){
      throw new Error('This deeQ is missing a Q');  
    }
    






    if(value){
     



    }


   
  }

  
}

module.exports = Queue;