/*
 * Задача 11: «Пересечения массивов»
 *
 * Напишите функцию intersection(arr1, arr2). Она должна принимать
 * на вход два массива целых чисел. Функция должна вернуть новый
 * массив чисел, содержащихся в обоих исходных массивах.
 * 
*/

function intersection(arr1, arr2) {
      let ans1 = true;  //результат сравнения двух массивов
      let res =[]; //итоговый массив
  
      arr1.every(function(a){
        // console.log('проверяем элемент', a);
        ans1 = arr2.includes(a);
        if (ans1)      
          res.push(a);
        return true;
      })   
  
  // console.log ('итоговый массив пересечений', res);
  return res;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(intersection([8, 91, 4, 1, 3], [1, 5, 4, 2])); // [4, 1]
console.log(intersection([1, 5, 4, 2], [7, 12])); // []