'use strict';

var Queue = require('../lib/queue-with-stacks');

describe('queue', () => {
  describe('enqueue', () => {

    it('throws error on null value', () => {
      let nullNode = new Queue();
      expect(()=> nullNode.enqueue()).toThrowError('Null Node Error.');
    });
    
    it('can enqueue in expected order', () => {
      let addEnq = new Queue();
      addEnq.enqueue(1);
      addEnq.enqueue(2);
      addEnq.enqueue(3);
      expect(addEnq.data.toArray()).toEqual([3,2,1]);
    });
  });
});

describe('dequeue', () => {

  it('throws error on null deeQ value', () => {
    let nullNode = new Queue();
    expect(()=> nullNode.dequeue()).toThrowError('This deeQ is missing a Q');
  });
  


  it('can  dequeue in expected order', () => {
    let deeQ = new Queue();
    deeQ.enqueue(1);
    deeQ.enqueue(2);
    deeQ.enqueue(3);
    deeQ.dequeue();
    expect(deeQ.data.toArray()).toEqual([3,2]);
  });
});