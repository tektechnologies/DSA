'use strict';

function LinkedList() {
  this.head = null;
  // console.log(this.head);
}

//.append(value) 
//which adds a new node with the given value to the end of the list
LinkedList.prototype.append = function(val){
  var node = {
    value: val,
    next: null,
  };
  if(!this.head){
    this.head = node;
  } else {
    let current = this.head;
    while(current.next){
      current = current.next;
    }
    current.next = node;
  }
};

LinkedList.prototype.includes = function(value){
  let current = this.head;
  while(current.next !== null && current.value !== value){ 
    current = current.next;
    //console.log('next', current);
  }
  if(current.value === value){
    return true;
  }else if(current.next === null){
    return false;
  }
};



LinkedList.prototype.insert = function(value){
  var node = {
    value: value,
    next: this.head,
  };
  this.head = node;  
};


// .insertBefore(value, newVal) 
// which add a new node with the given newValue immediately before the first value node

LinkedList.prototype.insertBefore = function(value, newVal){
  // console.log(this.head);
  var node = {
    value: newVal,
    next: null,
  };
  let current = this.head;
  //console.log(current.next);
  while( current.next !== null && current.next.value !== value){ 
    current = current.next;
    // console.log('next', current);
  }
  let storedNode;
  storedNode = current.next;
  node.next = storedNode;
  current.next = node;
};



// .insertAfter(value, newVal) 
// which add a new node with the given newValue immediately after the first value node

LinkedList.prototype.insertAfter = function(value, newVal){
  console.log(this.head);
  var node = {
    value: newVal,
    next: null,
  };
  let current = this.head;
  console.log(current.next);
  while( current.next !== null && current.value !== value){ 
    current = current.next;
    console.log('next', current);
  }
  let storedNode;
  storedNode = current.next;
  current.next = newVal;
  current.next = storedNode;
};



// findFromEnd(k) 
// find a node from the end of our list, then return that previous value

LinkedList.prototype.findFromEnd = function(value){
  
  let current = this.head;
  let position = 1;
  console.log(current);

  while(current.next){ 
    current = current.next;
    console.log('next', current);
    position++;
  }
  current = this.head;

  for(let x = 1; x < (position - value); x++){
    current = current.next;
  }
  return current;
};






LinkedList.prototype.mergeLists = function(listOne, listTwo){
  
};








module.exports = LinkedList;









