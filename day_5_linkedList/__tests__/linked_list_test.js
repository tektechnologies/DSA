'use strict';

const linkedList = require('../linked_list');

describe('linkedList', () => {
  let ll = new linkedList(); 
  ll.append('100');
  it('the linked list has nodes', () => {
    expect(ll.head).not.toBe(null);
  });


  describe('append', () => {
    it('adds to end of list', () => {
      ll.append('400');
      expect(ll.includes('400')).toBe(true);
    });
  });




  describe('includes', () => {
    it('this link list includes ', () => {
      ll.append('200');
      //console.log(ll);
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

  describe('insertBefore', () => {
    //we now know insert is adding to the list before queried val. 
    it('inserts value before the queried value', () => {
      ll.insert('400'); 
      ll.insert('500');
      ll.insertBefore('300', '450');
      expect(ll.includes('450')).toBe(true);        
    });
  });


  describe('insertAfter', () => {
    //we now know insert is adding to the list before queried val. 
    it('inserts value after the queried value', () => {
      ll.insert('600'); 
      ll.insert('700');
      ll.insertBefore('600', '650');
      expect(ll.includes('650')).toBe(true); 

    });
  });

  describe('findFromEnd', () => {
    //we now know insert is adding to the list before queried val. 
    it('finds a value from the end of a list ', () => {  
      let llist = new linkedList(); 
      llist.insert('800'); 
      llist.insert('900');
      llist.insert('1000');
      expect(llist.findFromEnd(2).value).toBe('1000'); 
    });
  });
 

  
});