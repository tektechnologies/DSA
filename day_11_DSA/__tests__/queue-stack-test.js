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
      expect(addEnq.value.head.value).toBe(3);
     



    
    });
  });




});

describe('dequeue', () => {
  it('can  dequeue in expected order', () => {
    let queue = new Queue();
   
  });
});