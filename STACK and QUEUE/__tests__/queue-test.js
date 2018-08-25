'use strict';

var Queue = require('../../lib/queue');

describe('queue', () => {
  it('can enqueue and dequeue in expected order', () => {
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

    queue.enqueue({ tree: true });
    expect(queue.toArray()).toEqual([1, 'dos', { tree: true }]);

    // Uses Queue.inspect()
    console.log(queue);
    // Uses Queue.toString()
    console.log(`${queue}`);

    // Assert
    expect(queue.count).toBe(3);

    // Act
    expect(queue.dequeue()).toBe(1);
    expect(queue.toArray()).toEqual(['dos', { tree: true }]);

    expect(queue.dequeue()).toBe('dos');
    expect(queue.toArray()).toEqual([{ tree: true }]);

    expect(queue.dequeue()).toEqual({ tree: true });
    expect(queue.toArray()).toEqual([]);

    // Assert
    expect(queue.count).toBe(0);
  });
});