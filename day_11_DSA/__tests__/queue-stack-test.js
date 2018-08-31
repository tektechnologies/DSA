'use strict';

var Queue = require('../../lib/queue-with-stacks');

describe('queue', () => {
  describe('enqueue', () => {


    it('can enqueue in expected order', () => {
      it('throws error on null value', () => {
        let nullNode = new Queue();
        expect(()=> nullNode.enqueue()).toThrowError('');
      })



    
    });
  });




});

describe('dequeue', () => {
  it('can  dequeue in expected order', () => {
    let queue = new Queue();
   
  });
});