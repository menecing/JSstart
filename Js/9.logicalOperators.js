//Логические операторы
"use strict"
const hamburger = 5;
const fries = 1;
if (hamburger && fries) {
    console.log ("Я сыт!")
}

console.log (hamburger && fries);
//В JS есть пять сущностей которые будут false - это ноль, пустая строка, null, underfined

const hamburger2 = 2;
const fries2 = 1;
const cola = 1;
if (hamburger2 === 2 && cola === 1 && fries2 === 1) {
    console.log ("Все сыты!");
} else {
    console.log ("Мы уходим");
}
//ниже примеры, выводится первое ложное значение, если ложного нет последнее в выражении
console.log (1 && 0); //0 первое ложное
console.log (1 && 5); //оба верны, выводится последнее в выражении
console.log (null && 5); //нул ложное
console.log (0 && "wefwefewfrwe"); // 0 первое ложное

//Логический оператор ИЛИ, оператор запинается на первом правдивом
const hamburger3 = 2;
const fries3 = 0;
const cola3 = 0;
if (hamburger3 || cola3 || fries3) {
    console.log ("Все довольны!");
} else {
    console.log ("Мы уходим");
}

let johnReport, alexReport, samReport, mariaReport = 'done';

console.log (johnReport || alexReport || samReport || mariaReport)

//И выше по приоритету ИЛИ
const hamburger4 = 2;
const fries4 = 3;
const cola4 = 0;
const nuggets = 2;
if (hamburger4 ===3 && cola4 === 2 || fries4===3 && nuggets) {
    console.log ("Все довольны!");
} else {
    console.log ("Мы уходим");
}

//оператор НЕ !
console.log (!0)




