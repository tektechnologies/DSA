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
    expect(cQue.catCount).toBe(1);
    let dog = {
      type: 'lab',
      name: 'yeejah',
    };
    cQue.enqueue(dog);
    expect(cQue.head.next.pet.type).toBe('lab');
    expect(cQue.dogCount).toBe(1);
    expect(cQue.length).toBe(2);
   
  });

});










describe('queue', () => {
  it('can  dequeue in expected order', () => {
    
  });
});