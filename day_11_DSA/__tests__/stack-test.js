'use strict';

const PushPopStack = require('../lib/push-pop.js');

describe('stack', () => {
  it('can add a value to stack top', ()=> {
    let stack = new PushPopStack();
    stack.push(1);
    expect(stack.count).toBe(1);
  });
});

it('')