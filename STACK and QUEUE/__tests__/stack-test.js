'use strict';

var Stack = require('../../lib/stack');

describe('stack', () => {
  it('can push and pop in expected order', () => {
    let stack = new Stack();
    expect(stack.count).toBe(0);
    stack.push(1);
    expect(stack.toArray()).toEqual([1]);
    stack.push(22);
    expect(stack.toArray()).toEqual([22, 1]);
    stack.push({ theMatrix: true });
    expect(stack.toArray()).toEqual([{ theMatrix : true }, 22, 1]);
    expect(stack.count).toBe(3);
    expect(stack.peek()).toEqual({ theMatrix : true });
  });
});

describe('stack', () => {
  it('can push and pop in expected order', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.pop()).toEqual(3);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
    expect(stack.toArray()).toEqual([]);
    expect(stack.count).toBe(0);
    
  });
});