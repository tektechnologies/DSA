'use strict';

let linkList = new LinkedList();


function LinkedList() {
  this.head = null;
  console.log(this.head);
}

LinkedList.prototype.push = function(val){
  var node = {
    value: val,
    next: null,
  };

  if(!this.head){
    this.head = node;
  }
  else{
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
    console.log('next', current);
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




module.exports = LinkedList;

