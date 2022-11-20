// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 8, 144, 233...
// 斐波那契（fibonacci）
// 用 前前一個數字 ＋ 前一個數字 ＝ 下一個數字
// 0 + 1 = 1
// 1 + 1 = 2
// 1 + 2 = 3
// ...

let calculations = 0;
/**
 * @description 傳入斐波那契數列中該數字的位置，並返回該數值
 * @param { Number } index
 * @returns Number
 */
function fibonacci(index) {
  calculations++;
  if (index < 2) {
    // 初始兩個數需要直接返回
    return index;
  }
  // 因為
  return fibonacci(index - 1) + fibonacci(index - 2);
}

// console.log(fibonacci(6));
// console.log('執行次數:' + calculations);

// console.log(fibonacci(8));
// console.log('執行次數:' + calculations);

// console.log(fibonacci(10));
// console.log('執行次數:' + calculations);

// console.log(fibonacci(44));
// console.log('執行次數:' + calculations);
// 這樣的函式當數字越大，執行的次數會以指數性的方式成長，超過50以上基本上就會當機
// 效率非常差，因為時間複雜度為O(n^2)

/****************************/
// 優化可以到 O(N)
// 使用緩存來優化的話就可以降低運行次數
// top down
let calculations1 = 0;
function fibonacciMaster(n) {
  let cache = {};
  return function fib(n) {
    calculations1++
    if (cache[n]) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
      }
    }
  };
}

const fasterFib = fibonacciMaster()

// console.log(fasterFib(6));
// console.log('DP 執行次數:' + calculations1);

// console.log(fasterFib(8));
// console.log('DP 執行次數:' + calculations1);

// console.log(fasterFib(10));
// console.log('DP 執行次數:' + calculations1);

// console.log(fasterFib(44));
// console.log('DP 執行次數:' + calculations1);

// console.log(fasterFib(55));
// console.log('DP 執行次數:' + calculations1);
let calculations2 = 0
function fibonacciMaster2(n) {
  let answer = [0, 1];
  for (let i = 2; i <= n; i++) { // 從 2 開始
    calculations2++
    answer.push(answer[i-2]+ answer[i-1])
  }
  return answer.pop() // 回傳最後一個值
}
// 這個方法雖然很好的避免了遞迴，但也比較不容易理解
// 這個解法之所以稱為 bottom up
// 是因為是從最小單位開始往上，越來越複雜的發展
console.log(fibonacciMaster2(6));
console.log('DP 執行次數:' + calculations2);

console.log(fibonacciMaster2(8));
console.log('DP 執行次數:' + calculations2);

console.log(fibonacciMaster2(10));
console.log('DP 執行次數:' + calculations2);

console.log(fibonacciMaster2(44));
console.log('DP 執行次數:' + calculations2);

console.log(fibonacciMaster2(55));
console.log('DP 執行次數:' + calculations1);