'use strict';

//this is the object that we adopt out our pet constuctor. 
//pet object constructor
class Pet{
  constructor(adoptPet){
    this.pet = adoptPet;
    this.next = null;
    this.previous = null;  
  }
}
//create the queue for pets to line up for adoption
class CutieQueue {
  //queue constructor
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
    this.catCount = 0;
    this.dogCount = 0;
  }

  enqueue(pet) {
    if(!pet){
      return null;
    }//if no pet, adpotion is null. if new pet give the pet a head and tail.
    let newPet = new Pet(pet);

    if(!this.head){
      this.head = newPet;
      this.tail = newPet;
    }//if we have a head and tail, lets add new pet to nodes tail.next
    this.tail.next = newPet;
    // console.log(newPet);
    newPet.previous = this.tail;
    //console.log(this.tail);
    this.tail = newPet;
    //console.log(newPet);
    this.length++;
    //now that we have added to total pets, lets add by type
    if(newPet.pet.type === 'tabby'){
      this.catCount++;
    }
    if(newPet.pet.type === 'lab'){
      this.dogCount++;
    }
  }










  dequeue() {
    
  }

  
}

module.exports = CutieQueue;