"use strict"
//Основы ООП, прототипно-ориентированное наследование
let str = "some";
let strObj = new String(str);

console.log (typeof(str));
console.log (typeof(strObj));

console.dir ([1,2,3]);

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log ("Hello!")
    }
};

const jonh = {
    health: 100,
};

jonh.__proto__ = soldier; //тут передается свойство от прототипа. Это старый тип записи, его можно встретить но не нужно использовать в своем коде

Object.setPrototypeOf(jonh, soldier); //второй способ передачи свойств от прототипа. Это новый метод записи.

console.log (jonh.armor);
jonh.sayHello(); //взят  данный метод из прототипа

const jonh = Object.create(soldir) //создается новый объект jonh,который будет прототипно наследоваться от солдата