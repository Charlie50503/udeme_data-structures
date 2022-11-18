// hi my name is andrei
//　↓
// // ierdna si eman ym ih
// function reverse(str){
//   const strs = str.split("")
//   const ary = []
//   for (let index = (strs.length-1); index >= 0; index--) {
//     const item = strs[index];
//     ary.push(item)
//   }
//   return ary.join('')
// }


function reverse(str){
  if(!str || typeof str!=="string"){
    return "hmm that is not good";
  }

  if(str.length < 2){
    return str
  }

  const backwards = [];

  const totalItems = str.length - 1

  for (let index = totalItems; 0 <= index; index--) {
    backwards.push(str[index]); //javascript的str本身就可以用array的方式取字元
  }
  return backwards.join("");
}

function reverse2(str){
  return str.split("").reverse().join("");
}


reverse3 = str => {
  return [...str].reverse().join("");
}

console.log(reverse("hi my name is andrei"));
console.log(reverse2("hi my name is andrei"));
console.log(reverse3("hi my name is andrei"));