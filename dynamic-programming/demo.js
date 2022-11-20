// 一個需要計算的函數
function addTo80(n){
  console.log("花費很長的等待時間")
  return n + 80;
}


addTo80(5) // 每做一次都要等很久
addTo80(6) // 每做一次都要等很久

let cache = {}

function memoizedAddTo80(n){
  if(n in cache){
    return cache[n]
  } else {
    cache[n] = n + 80
    return cache[n]
  }
}
memoizedAddTo80(5) // 只要我們做過一次，之後再傳入相同的值時我們也可以得到同一個結果
console.log(memoizedAddTo80(5))

function memoizedAddTo802(n){
  let closureCache = {}
  return function(n){
    if(n in closureCache){
      return closureCache[n]
    } else {
      closureCache[n] = n + 80
      return closureCache[n]
    }
  }
  
}
const memoized = memoizedAddTo802() // 建立緩存空間

console.log(memoized(5)) // 計算後保存到閉包裡面
console.log(memoized(6))