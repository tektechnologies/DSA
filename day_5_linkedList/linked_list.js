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

  while(current.next !== null || current.value !== value){ 
    current = current.next;
  }
  if(current.next === null){
    return false;
  }else if(current.value === value){
    return true;
  }
  
};








module.exports = LinkedList;


//console.log(linkedList(arrayOne));
//console.log(linkedList(arrayTwo));
//console.log(linkedList(arrayThree));