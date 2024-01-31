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

const numberOfFilms= prompt ("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const lastFilms= prompt ("Один из последних просмотренных фильмов?", ""),
        ratingFilms= prompt ("На сколько оцените его?", ""),
        lastFilm2= prompt ("Один из последних просмотренных фильмов?", ""),
        ratingFilms2= prompt ("На сколько оцените его?", "");

personalMovieDB.movies[lastFilms] = ratingFilms;
personalMovieDB.movies[lastFilm2] = ratingFilms2;

console.log (personalMovieDB);