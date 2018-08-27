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

  // Change how console.log() renders this
  inspect() {
    return this.values;
  }

  toArray() {
   
    return this.values;
  }

  // Change how queue is rendered as string
  toString() {
    return this.values.toString();
  }
}

module.exports = Queue;