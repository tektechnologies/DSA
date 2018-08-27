'use strict';

class Queue {
  
  constructor() {
    this.count = 0;
    this.values = [];
  }

  enqueue(value) {
    this.values[this.count] = value;
    // this.values.push(value);
    this.count++;
  }

  dequeue() {
    this.count--;
    // How would we shift without shift?

    return this.values.shift();
  }

  
}

module.exports = Queue;