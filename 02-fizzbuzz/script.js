/*
 * Задача 2: «FizzBuzz»
 *
 * Напишите функцию fizzBuzz(n), принимающую как аргумент целое число.
 * Функция должна выводить в консоль числа от 1 до n, заменяя числа:
 *
 * • кратные трём — на fizz;
 * • кратные пяти — на buzz;
 * • кратные и трём, и пяти одновременно — на fizzbuzz.
 * 
*/

function fizzBuzz(num) {
    // Напишите код здесь
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(fizzBuzz(15));

function fizzBuzz(n) {
  for (let i=1; i<n+1; i++){
    if (i%3===0 && i%5!==0) 
	console.log('fizz');
    else if (i%5===0 && i%3!==0) 
    	console.log('buzz');
    else if (i%3===0 && i%5===0) 
  	 console.log('fizzbuzz');
    else
  	 console.log(i);
  }   
}

//fizzBuzz(15);