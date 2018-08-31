'use strict';

var Queue = require('../lib/queue');

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







    // queue.enqueue({ theMatrix: true });
    // expect(queue.toArray()).toEqual([1, 2, 3, 22, { theMatrix: true }]);

    // // Assert
    // expect(queue.count).toBe(5);

    // // Act
    // expect(queue.dequeue()).toBe(1);
    // expect(queue.toArray()).toEqual([2, 3, 22, { theMatrix: true }]);

    // expect(queue.dequeue()).toBe(2);
    // expect(queue.toArray()).toEqual([3, 22, { theMatrix: true }]);

    // expect(queue.dequeue()).toBe(3);
    // expect(queue.toArray()).toEqual([22, { theMatrix: true }]);

    // expect(queue.dequeue()).toBe(22);
    // expect(queue.toArray()).toEqual([{ theMatrix: true }]);

    // expect(queue.dequeue()).toEqual({ theMatrix: true });
    // expect(queue.toArray()).toEqual([]);

    // // Assert
    // expect(queue.count).toBe(0);
  });
});