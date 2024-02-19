"use strict"
//Методы и свойства строк и чисел
//У строк одно свойство length
const str = "teSt";
console.log (str.length); //кол-во символов внутри строки
console.log (str.toUpperCase()); //замена букв на верхний регистр
console.log (str.toLowerCase()); //замена букв на нижний регистр


const arr = [1,2,3];
console.log (arr.length); //кол-во символов внутри массива

//Метод - поиск подстроки
const fruit = "Some fruit";
console.log (fruit.indexOf("fruit")) //Показывает с какого символа по счету начинается искомое слово
console.log (fruit.indexOf("q")) //результат -1 означает что искомый символ не найден

//Метод вырезки
const logg = "Hello World";
console.log (logg.slice(6, 10)); //вырезать кусок строки, последний аргумент (10) то, что не включается!
console.log (logg.slice(6)); //если указать только первый аргумент вырежет от выбраного начала до конца строки
console.log (logg.slice(-5, -1)); //начинать отсчет с конца строки
console.log (logg.substring(6, 11)); //не работает с отрицательными аргументами
console.log (logg.substr (6,5)); //первый аргумент начала позиции, второй - сколько символов вырезать

const num = 12.2;
console.log (Math.round (num)) //округлить число

const tester = "12.2px";
console.log (parseInt(tester)); //метод который меняет число в другую систему исчисления
console.log (parseFloat(tester)); //Метод возвращает дробные значения
