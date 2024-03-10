"use strict"
//Передача по ссылке или по значению, Spread оператор

let a = 5,
    b = a;

b = b + 5;

console.log (b);
console.log (a);

const obj = {
    a: 5,
    b: 1
};

const copy = obj; //в переменную copy кладется ссылка на существующий объект

copy.a = 10;
console.log (copy);
console.log (obj);

function copy2 (mainObj) { //копирование данных из одного объекта в другой
    let objCopy = {}; //создаем пустой объект
    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj [key];
    }
    return objCopy;
};

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }

};

const newNumbers = copy2 (numbers);

newNumbers.a = 10;
newNumbers.c.x = 10; //тут поменяется свойство в скопированном и начальном объекте! 
/*Приведенный пример является поверхностной копией,т.е. 
если внутри объекта есть другие объекты они будут считываться ссылкой*/

console.log (newNumbers);
console.log (numbers);

//Ниже пример копирование одного объекта в другой
const add = {
    d: 17,
    e: 20
};

console.log (Object.assign(numbers, add)); //первый аргумент в скобках куда копируем, второй что

//Пример копирования объекта с помощью assign
const add2 = {
    d: 17,
    e: 20
};
const clone = Object.assign({},add2);

clone.d = 20;
console.log (add2);
console.log (clone);


//Пример копии массива

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice (); //метод slice позволяет скопировать старый массив

newArray [1] = 'sdsdf';
console.log (newArray);
console.log (oldArray);

//Пример использования оператора разворота, разворачивает структуры на отдельные элементы
const video = ['youtube', 'vimeo', 'rutube'],
    blogs = ['wordpress', 'livejournal', 'blogger'],
    internet = [...video,...blogs, 'vk', 'facebook'];

console.log (internet);

function log(a, b, c) {
    console.log (a);
    console.log (b);
    console.log (c);
};

const num = [2, 5, 7];

log(...num);

//
const array = ['a', 'b'];

const newArray2 = [...array];

const q = {
    one: 1,
    two: 2
};

const newObj = {...q};

console.log (q);
console.log (newObj);


