"use strict"
//Классификация типов данных
//data - данные, types - типы

let number = 5.6;
console.log (4/0);
console.log ('string' * 9);

const persone = '5';
const bool = false;

console.log (something); // тип ошибки null

let und;
console.log (und); //тип ошибки underfined

const obj = { //тип данных объект
    name: "John",
    age: 25,
    isMarried: false //выше записаны три свойства объекта
};

console.log (obj.isMarried); //первый способ вывода данных через точку
console.log (obj ["name"]); //второй способ вывода данных через квадратные скобки
  //           0           1             2        3  ключ массива фиксирован значением
let arr = ['plum.png', 'orange.jpg', 'apple.bmp', 6]; //пример массива - частного случая объекта
console.log (arr[1]);