function isDuplicate(input){
  const keys = new Set();
  let duplicateTarget = undefined;
  for (let i = 0; i < input.length; i++) {
    if(!keys.has(input[i])){
      keys.add(input[i])
    }else{
      duplicateTarget = input[i]
      break;
    }
    
  }
  return (duplicateTarget ? true : false)
}

console.log(isDuplicate([1,2,3,4]));