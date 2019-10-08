/*
 * Задача 8: «Фибоначчи»
 *
 * Последовательность Фибоначчи — это порядок чисел, где каждое последующее
 * число является суммой двух предыдущих: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.
 * 
 * Напишите функцию, которая принимает на вход число n и возвращает n-й элемент
 * последовательности Фибоначчи.
*/

function fibonacci(n) {
    switch(true) {
      case (n<=0):
        return false;
        break;
      case n===1:
        return 1;
        break;
      case n>=2:
        let arr = [0, 1];        
        while (arr.length < n) {
          let number = arr[arr.length-1]+arr[arr.length-2];
          arr.push(number);}      
        // console.log(arr);
        return arr[arr.length-1];
    }   
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(fibonacci(10)); // 2. Четвёртое число последовательности — двойка (0, 1, 1, 2)