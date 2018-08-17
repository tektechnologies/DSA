'use strict';

const linkedList = require('../linked_list');

describe('linkedList', () => {
  let ll = new linkedList(); 
  ll.push('100');
  it('the linked list has nodes', () => {
    expect(ll.head).not.toBe(null);
  });


  describe('push', () => {
    it('adds to end of list', () => {
      ll.push('400');
      expect(ll.includes('400')).toBe(true);
    });
  });




  describe('includes', () => {
    it('this link list includes ', () => {
      ll.push('200');
      console.log(ll);
      //expect(ll.includes('200')).toBe(true);
      expect(ll.includes('100')).toBe(true);
    });
  });





  describe('inserts', () => {
    //we now know insert is adding to the beginning of the list. 
    it('this link list inserts', () => {
      ll.insert('300'); 
      expect(ll.includes('300')).toBe(true);
      expect(ll.head.value).toBe('300');
      expect(ll.head.next.value).toBe('100');
    });




  });





 

  
});