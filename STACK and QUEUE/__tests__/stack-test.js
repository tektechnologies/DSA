'use strict';

var Stack = require('../lib/stack');

describe('stack', () => {
  it('can push and pop in expected order', () => {
    let stack = new Stack();
    stack.push(1);
    expect(stack.head.value).toBe(1);
    stack.push(2);
    expect(stack.head.value).toBe(2);
    expect(stack.head.next.value).toBe(1);
  });
});

describe('stack', () => {
  it('can push and pop in expected order', () => {
    let stack = new Stack();
    stack.push(1);
    expect(stack.head.value).toBe(1);
    stack.pop();
    expect(stack.head).toBe(null);
    
  });
});