'use strict';
 
function arrayInsert(array, value) {
  //console.log(array);
  //console.log(value);
  let newArray = [];
  let insertPoint = array.length/2;
  console.log(insertPoint);

  for(let x= 0; x < array.length; x++){
     //console.log(array);
    if(x === insertPoint){
      //console.log('this is the insert ' + insertPoint);
      newArray[x] = value;
      continue;
    }
    newArray[x] = array[x];     
  }
 return newArray;

 


   
    //console.log(arrayTwo);
    //console.log(arrayOne);
}
module.exports = arrayInsert;


//console.log(arrayInsert(arrayOne));
//console.log(arrayInsert(arrayTwo));
//console.log(arrayInsert(arrayThree));