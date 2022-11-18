//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1
//Given an array = [2,3,4,5]:
//It should return undefined

function firstRecurringCharacter(input){
  for (let i = 0; i < input.length; i++) {
    const element = input[i];
    for (let j = i+1; j < array.length; j++) {
      if(input[i]===input[j]){
        return input[i]
      }
    }
  }
  return undefined;
}

function firstRecurringCharacter2(input){
  let map = {};
  for (let i = 0; i < input.length; i++) {
    if(map[input[i]]){
      return input[i]
    }else{
      map[input[i]] = i;
    }
  }
  return undefined;
}