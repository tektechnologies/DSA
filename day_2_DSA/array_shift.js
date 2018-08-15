'use strict';

function arrayInsert(array, value) {
  if (!Array.isArray(array)) return null;

  if (value === undefined) return array;

  console.log(array);
  console.log(value);
  let newArray = [];

  if (array.length <= 1) {
    newArray[array.length] = value;
  }

  let insertPoint = Math.ceil(array.length/2);
  console.log(insertPoint);

  // TODO: Could we end this loop at x < array.length + 1?
  for(let x= 0; x < array.length; x++){
    // if x <= insertPoint then keep array[x] at x
    // if x == insertPoint then set value at x
    // if x > insertPoint then keep array[x] at x+1

    //console.log(array);
    if(x === insertPoint){

      //console.log('this is the insert ' + insertPoint);
      newArray[x] = value;
      newArray[x + 1] = array[x];
      console.log('equal', newArray);

    } else if (x > insertPoint) {
      newArray[x + 1] = array[x];     
      console.log('gt', newArray);

    } else {
      newArray[x] = array[x];     
      console.log('lt', newArray);
    }
  }
  return newArray;

}
module.exports = arrayInsert;


//console.log(arrayInsert(arrayOne));
//console.log(arrayInsert(arrayTwo));
//console.log(arrayInsert(arrayThree));