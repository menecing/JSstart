"use strict"
//Операторы в JS

console.log ('arr'+' - object'); //сложение двух строк
console.log (4 + + '5'); //5 записана как строка, но + преобразует в число

let incr = 10,
    decr = 10;

// incr++;
// decr--;

// console.log (incr);
// console.log (decr); 

console.log (incr++); //постфиксная запись сначала возвращает старое значение
console.log (decr--); 

console.log (5%2);

console.log (2*4 == 8);

const isChecked = true,
        isClose = true;

console.log (isChecked && isClose); //true когда два аргумента правдивы
console.log (isChecked || isClose); //true когда хотя бы один аргумент правдив
