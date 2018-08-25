'use strict';

var Queue = require('../../lib/queue');

describe('queue', () => {
  it('can enqueue in expected order', () => {
    // Arrange
    let queue = new Queue();
    // Assert
    expect(queue.count).toBe(0);

    // Act
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.toArray()).toEqual([1,2,3]);
    expect(queue.tail.data).toBe(3);
    queue.enqueue(22);
    expect(queue.toArray()).toEqual([1,2,3,22]);
  });

  describe('queue', () => {
    it('can  dequeue in expected order', () => {
      // Arrange
    queue.enqueue({ theMatrix: true });
    expect(queue.toArray()).toEqual([1, 2, 3, 22, { theMatrix: true }]);

    // Uses Queue.inspect()
    console.log(queue);
    // Uses Queue.toString()
    console.log(`${queue}`);

    // Assert
    expect(queue.count).toBe(5);

    // Act
    expect(queue.dequeue()).toBe(1);
    expect(queue.toArray()).toEqual([2, 3, 22, { theMatrix: true }]);

    expect(queue.dequeue()).toBe(2);
    expect(queue.toArray()).toEqual([3, 22, { theMatrix: true }]);

    expect(queue.dequeue()).toBe(3);
    expect(queue.toArray()).toEqual([22, { theMatrix: true }]);

    expect(queue.dequeue()).toBe(22);
    expect(queue.toArray()).toEqual([{ theMatrix: true }]);

    expect(queue.dequeue()).toEqual({ theMatrix: true });
    expect(queue.toArray()).toEqual([]);

    // Assert
    expect(queue.count).toBe(0);
  });
});