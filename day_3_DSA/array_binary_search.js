'use strict';

function binarySearch(array, value) {
  let  checkArgs = Array.isArray(array);
  if(!array || !value || !checkArgs || array.length===0) return -1;

  let splitArray;
  let minVal = 0;
  let maxVal = array.length - 1;

  while(maxVal >= minVal){
    splitArray = Math.floor((minVal + maxVal) / 2);
    
    if(array[splitArray] === value){

      return splitArray;
    
    } else if(array[splitArray] < value){

      minVal = splitArray + 1;

    } else if(array[splitArray] > value){
     
      maxVal = splitArray - 1;

    }
    console.log({
      minVal,
      splitArray,
      maxVal,
      min: array[minVal],
      mid: array[splitArray],
      max: array[maxVal],
    });
  }
  return -1;



  // if(array[splitArray] === value){
      
  // } else 


  // while(minVal < maxVal){
  //   splitArray = Math.floor(minVal+maxVal)/2;
  //   console.log(splitArray);
  //   if(array[splitArray] === value){
  //   } else if(array[splitArray] < value){
  //      return splitArray;
  // } else if(array[splitArray] < value){
  //   minVal = splitArray + 1;
  // } else {
  //   maxVal = splitArray - 1;
  // }
  // }
  // return -1;
  //console.log();
  
  
}
module.exports = binarySearch;


//console.log(arrayInsert(arrayOne));
//console.log(arrayInsert(arrayTwo));
//console.log(arrayInsert(arrayThree));