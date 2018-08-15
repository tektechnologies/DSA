
//var arrayOne = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199]

var arrayTwo = [89, 2354, 3546, 23, 10, -923, 823, -12];

var arrayThree = [1, 2, 3, 4, 5, 6];
//missy function name is ref to her song that cites the hiphopscript reverse method.
function missyElliot(allArrays) {
  console.log('this is the arrays coming into the function ' + allArrays);
  var revArray = [];
  var missyMe = 0;
  console.log('this is the missyMe ' + missyMe + ' after the var = 0;');
 

  for (var x = allArrays.length-1; x >= 0; x = x- 1) {
    console.log('this shows x after forloop ' + x);
    //takes array element starting from the end of the array and puts the element into the beggining position of the new array object revArray.
    revArray[missyMe] = allArrays[x];
    console.log('this is current iteration of the revArray[missyMe] = allArrays[x] '+ revArray[missyMe]);
    // missyMe = missyMe + 1;
    missyMe++;
    console.log('this is missy me counter in the for loop ' + missyMe);
  }
  return 'this is the return statement ' + revArray;
}
 
console.log(missyElliot(arrayOne));
console.log(missyElliot(arrayTwo));
console.log(missyElliot(arrayThree));

  