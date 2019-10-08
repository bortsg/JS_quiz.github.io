/*
 * Задача 7: «Анаграмма»
 *
 * Два слова называют анаграммами, если они состоят из одних и тех же букв.
 * Напишите функцию, проверяющую, являются ли две строки анаграммами друг друга
 * (регистр букв не имеет значения). Важны только символы: пробелы и знаки
 * препинания не учитывайте.
 * 
*/

function anagram(str1, str2) {
    // Напишите код здесь
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(anagram('finder!', 'Friend')); // true
console.log(anagram('!!!', '...')); // false

/*Надо исправить: учитываются знаки препинания - функция возвращает не то значение для anagram("!!!", "...")'*/
function anagram(str1, str2) {
  
  let str1New = str1.replace(/[/.,!?;]*/g, '');
  let str2New = str2.replace(/[/.,!?;]*/g, '');
  
  if (str1New&&str2New) 
    {
      let mas1 = []; //массив уникальных букв первого слова
      for (let i=0; i< str1New.length; i++) {
        if (!mas1.includes(str1New[i].toLowerCase()))
          mas1.push(str1New[i].toLowerCase());
      }
  
      let mas2 = []; //массив уникальных букв второго слова
      for (let k=0; k< str2New.length; k++) {
        if (!mas2.includes(str2New[k].toLowerCase()))
          mas2.push(str2New[k].toLowerCase());
      }
  
      let ans1 = true;  //результат сравнения двух массивов букв
      let ans2 = true;
      mas1.every(function(a){
        ans1 = mas2.includes(a);
      })   
  
      /* Надо исправить: перезаписывает значение ans полученное выше */
      mas2.every(function(a){
        ans2 = mas1.includes(a);   
      })   
  
      /*Надо исправить: retrun => return*/
      return (ans1&&ans2);      
      }
  else 
    return false;  
}