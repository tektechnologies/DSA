'use strict';

function binarySearch(array, value) {
  let splitArray;
  let minVal = 0;
  let maxVal = array.length - 1;

  while(minVal < maxVal){
    splitArray = Math.ceil((minVal+maxVal)/2);
    console.log(splitArray);

  };




  console.log();
  
  

}
module.exports = binarySearch;


//console.log(arrayInsert(arrayOne));
//console.log(arrayInsert(arrayTwo));
//console.log(arrayInsert(arrayThree));