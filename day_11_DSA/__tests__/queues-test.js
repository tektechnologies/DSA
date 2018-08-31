'use strict';

let Queue = require('../lib/queues');

describe('queue', () => {
  it('can enqueue in expected order', () => {
    // Arrange
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.toArray()).toEqual([3,2,1]);
    expect(queue.tail.value).toBe(1);
  });
});

describe('queue', () => {
  it('can  dequeue in expected order', () => {
    let queue = new Queue();
    
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.dequeue();
    expect(queue.toArray()).toEqual([3,2]);
  });
});