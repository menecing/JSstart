"use strict"
//Простое общение с пользователем
//communication-общение

alert('Hello!'); //всплывающее окно с сообщением в браузере 

const result = confirm ("Are you here?"); //задание вопроса пользователю с ответами да или нет
console.log (result)

const answer1 = prompt ("Вам есть 18 лет?", ""); //после запятой ковычки для дефолтного ответа
//console.log (answer); //в ответе всегда тип данных строка.
console.log (typeof(answer1)); //данная команда typeof помогает узнать тип данных

const answer2 = +prompt ("Вам есть 18 лет?", ""); //+ преобразовывает формат данных в числовой
console.log (typeof(answer2)); //данная команда typeof помогает узнать тип данных

const answers = [];
// answers[0]= prompt ('Как ваше имя?', '');
// answers[1]= prompt ('Как ваша фамилия?', '');
// answers[2]= prompt ('Сколько вам лет?', '');

console.log(typeof(answers));

// document.write (answers);