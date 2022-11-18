// function mergeSortedArrays(str1,str2){
//   if(!Array.isArray(str1) && !Array.isArray(str2) ){
//     return "型別不正確"
//   }
//   const mergedArray = []
//   let index1 = 0
//   let index2 = 0
//   while(typeof str1[index1]!== "undefined" || typeof str2[index2]!== "undefined"){
//     if(!str2[index2] || str1[index1] < str2[index2]){
//       mergedArray.push(str1[index1]);
//       delete str1[index1];
//       index1++
//     }else{
//       mergedArray.push(str2[index2]);
//       delete str2[index2];
//       index2++
//     }
//   }
//   return mergedArray
// }

console.log(mergeSortedArrays([0,3,4,31],[4,6,30]))
console.log(mergeSortedArrays([4,6,30],[1,2,10]))
console.log(mergeSortedArrays([4,6,30],[]))
console.log(mergeSortedArrays([],[4,6,30]))
console.log(mergeSortedArrays([],[]))


function mergeSortedArrays(array1,array2){
  const mergedArray = [];
  let array1Item = array1[0];
  let array2Item = array2[0];
  let i1 = 0;
  let i2 = 0;
  //check input
  if(array1.length === 0){
    return array2
  }
  if(array2.length === 0){
    return array1
  }

  while(array1Item || array2Item){
    if(!array2Item || array1Item < array2Item){
      mergedArray.push(array1Item);
      array1Item = array1[i1];
      i1++;
    }else{
      mergedArray.push(array2Item);
      array2Item = array2[i2];
      i2++;
    }
  }
  return mergedArray;
}