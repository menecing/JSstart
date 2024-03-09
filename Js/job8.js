"use strict"
//Задание №1
function getTimeFromMinutes (time) {
let hour = '';
let minute = '';
    if (typeof(time) !== 'number' || time <0 || !Number.isInteger (time)) {
    return ('Ошибка, проверьте данные');
    }
    switch (Math.trunc(time / 60)) {
        case 1:
        hour += (`Это ${Math.trunc(time / 60)} час`);
        break;
        case 2:
            hour += (`Это ${Math.trunc(time / 60)} часа`);
            break;
                    case 2:
            hour += (`Это ${Math.trunc(time / 60)} часа`);
            break;
        case 3:
            hour += (`Это ${Math.trunc(time / 60)} часа`);
            break;
        case 4:
            hour += (`Это ${Math.trunc(time / 60)} часа`);
            break;
        default:
            hour += (`Это ${Math.trunc(time / 60)} часов`);
            break;
    }
    switch (time % 60) {
        case 1:
            minute += (`${time % 60} минута`);
            break;
        case 21:
            minute += (`${time % 60} минута`);
            break;
        case 31:
            minute += (`${time % 60} минута`);
            break;
        case 41:
            minute += (`${time % 60} минута`);
            break;
        case 51:
            minute += (`${time % 60} минута`);
            break;
        case 2:
            minute += (`${time % 60} минуты`);
            break;
        case 3:
            minute += (`${time % 60} минуты`);
            break;
        case 4:
             minute += (`${time % 60} минуты`);
            break;
        default:
            minute += (`${time % 60} минут`);
            break;
    }

    return (`${hour} и ${minute}`)
}

getTimeFromMinutes (321)

//Задание №2

function findMaxNumber (one,two,three,four) {
if (typeof(one) !== 'number' || typeof(two) !== 'number' || typeof(three) !== 'number' || typeof(four) !== 'number') {
return 0;
}
return (Math.max (one,two,three,four));
}

findMaxNumber (1,5,6.6,11)