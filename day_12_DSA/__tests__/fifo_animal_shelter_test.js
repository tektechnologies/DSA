'use strict';

var CutieQueue = require('../lib/fifo_animal_shelter');

describe('In and Out Animal Hostel', () => {

  it('can enqueue in expected order', () => {
    let cQue = new CutieQueue();
    expect(cQue.enqueue()).toBe(null);


  });
});










describe('queue', () => {
  it('can  dequeue in expected order', () => {
    
  });
});