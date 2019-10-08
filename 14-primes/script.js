/*
 * Задача 14: «Простые числа»
 *
 * Напишите функцию primes(n). Её единственный аргумент — целое число n.
 * Функция должна возвращать массив простых чисел от 2 до n.
 * 
*/


function isPrime(n) {
   for (let i=2; i< n; i+=1) {
       if (n%i === 0){
        // console.log('не является простым число', n);
        return false;
       }
   }
  // console.log('простое число', n);
  return true;
}

function primes(num) {
    let res=[];
    for (let i=2; i <= num; i+=1){
      if (isPrime(i)) {
        res.push(i);
      }
    }
  console.log(res);
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(primes(6)); // [2, 3, 5]
console.log(primes(17)); // [2, 3, 5, 7, 11, 13, 17]


