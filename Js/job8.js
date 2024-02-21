"use strict"

function getTimeFromMinutes (time) {
let hour = '';
let minute = '';
    if (typeof(time) !== 'number' || time <0 || !Number.isInteger (time)) {
    return ('Ошибка, проверьте данные');
    }
    if (Math.trunc(time / 60) === 0) {
hour += (`Это ${Math.trunc(time / 60)} часов`);
}
if (Math.trunc(time / 60) === 1) {
hour += (`Это ${Math.trunc(time / 60)} час`);
}
for (i=2; i<=4; i++) {
if (Math.trunc(time / 60) === i) {
hour += (`Это ${Math.trunc(time / 60)} часа`);
}
}
for (j=5; j<=10; j++) {
if (Math.trunc(time / 60) === j) {
hour += (`Это ${Math.trunc(time / 60)} часов`);
}
}
if (time % 60===0) {
minute += (`${time % 60} минут`);
}
if (time % 60===1 || time % 60===21 || time % 60===31 || time % 60===41 || time % 60===51) {
minute += (`${time % 60} минута`);
}
for (j=2; j<=4; j++) {
if (time % 60 === j) {
minute += (`${time % 60} минуты`);
}
}
for (j=5; j<=59; j++) {
if (time % 60 === j) {
minute += (`${time % 60} минут`);
}
}
return (`${hour} и ${minute}`)
}

getTimeFromMinutes (51)