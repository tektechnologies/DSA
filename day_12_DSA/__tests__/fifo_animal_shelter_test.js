'use strict';

var CutieQueue = require('../lib/fifo_animal_shelter');

describe('In and Out Animal Hostel', () => {

  it('can enqueue in expected order', () => {
    let cQue = new CutieQueue();
    expect(cQue.enqueue()).toBe(null);
  });

  it('can add pet to adopt', () => {
    let cQue = new CutieQueue();
    let cat = {
      type: 'tabby',
      name: 'garrylasereyes',
    };
    cQue.enqueue(cat);
    expect(cQue.head.pet.type).toBe('tabby');
  });

});










describe('queue', () => {
  it('can  dequeue in expected order', () => {
    
  });
});