/*
 * Задача 12: «Посчитать количество нулей»
 *
 * Напишите функцию countZeros(n), принимающую на вход натуральное число n. Возвращать функция
 * должна суммарное количество нулей, содержащихся во всех числах от 1 до n включительно.
 *
*/

function countZeros(n) {
    // Напишите код здесь
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(countZeros(20)); // 2 – два нуля, по одному в числах 10 и 20
console.log(countZeros(100)); // 11 – 11 нулей в числах: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100


function countZeros(n) {
  let res =[]; //запишем все числа от 1 до n в единый массив res
  let i=1;
  while (i<=n) {
     res.push(i)
    i+=1;
  }
    
  let zeros = 0; //число нулей в массиве res
  res.reduce(function(prev, item) {
    item.toString().split('').forEach(function(a){
      if (a==='0')
        zeros +=1;
    });
    return zeros;
  }); 
    
  // console.log(res);
  console.log(zeros);
}


countZeros(20); // 2 – два нуля, по одному в числах 10 и 20
//countZeros(100); // 11 – 11 нулей в числах: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100