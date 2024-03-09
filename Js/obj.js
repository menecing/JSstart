"use strict"
//Объекты, деструктуризация объектов
const options = {
    name: 'test',
    width: 1024,
    heigth: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function () {
        console.log ('Test');
    }
};

options.makeTest ();

const {border, bg} = options.colors; //дструктуризация объекта, вытащить объект из объекта
console.log (border);

console.log (Object.keys(options));
// console.log (options.name); //удаление свойства из объекта

// delete options.name;
// console.log (options);

let counter = 0;
for (let key in options) { //перебор свойств объекта с выводом ключа и его значения
    if (typeof (options [key]) === 'object') {
        for (let i in options [key]) {
        console.log (`Свойство ${i} имеет значение ${options [key][i]}`);
        counter++;
        }
    } else {
    console.log (`Свойство ${key} имеет значение ${options [key]}`);
    counter++;
    }
};

console.log (counter)