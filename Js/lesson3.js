/*Задание №1
1.Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос: 
"Сколько фильмов вы уже посмотрели?"

2.Создать объект personalMovieDB и в него поместить такие свойства:
 - count - сюда передается ответ на первый вопрос
 - movies - в это свойство поместить пустой объект
 - actors - тоже поместить пустой объект
 - genres - сюда поместить пустой массив
 - privat - в это свойство поместить boolean (логическое) значение false

3. Задайте пользователю по два раза вопросы:
 - "Один из последних просмотренных фильмов?"
 - "На сколько оцените его?"
 Ответы стоит поместить в отдельные переменные 
 Записать ответы в объект movies в формате:
  movies: {
    "logan": "8.1"
  }
Проверить, чтобы всё работало без ошибок в консоли

Если возникает ошибка Can't find variable то мы не объявили переменную, а так как поставили 
строгий режим JS на это ругается

*/
"use strict"

let numberOfFilms;

function start () {
  numberOfFilms= +prompt ("Сколько фильмов вы уже посмотрели?", "");

  while (numberOfFilms == '' || numberOfFilms == null || isNaN (numberOfFilms)) {  //isNaN если внутри не число возвращает true
    numberOfFilms= +prompt ("Сколько фильмов вы уже посмотрели?", "");
  }
}

start ();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms () {
  for (let i=0;i<2;i++) {
    const lastFilms= prompt ("Один из последних просмотренных фильмов?", "");
    const ratingFilms= prompt ("На сколько оцените его?", "");
    if (lastFilms != null && ratingFilms != null && lastFilms != '' && ratingFilms !='' && lastFilms.length < 50) {
    personalMovieDB.movies[lastFilms] = ratingFilms;
    console.log ('done');
    } else {
      console.log ('error');
      i--;
    }
  }
}

//rememberMyFilms ();

function detectPersonalLevel () {
  if (personalMovieDB.count <10) {
    console.log ('Просмотрено довольно мало фильмов')
  } else if (10>=personalMovieDB.count && personalMovieDB.count<=30) {
    console.log ('Вы классический зритель')
  } else if (personalMovieDB.count >30) {
    console.log ('Вы киноман')
  } else {
    console.log ('Произошла ошибка')
  }
}

//detectPersonalLevel ();

function showMyDB (hidden) {
  if (!hidden) {
    console.log (personalMovieDB);
  }
}
showMyDB (personalMovieDB.privat);

function writeYourGenres () {
  for (let i=1;i<4;i++) {
    personalMovieDB.genres [i-1]= prompt (`Ваш любимый жанр под номером ${i}`, "");
  }
}
writeYourGenres ()

//console.log (personalMovieDB);