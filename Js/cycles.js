"use strict"
//Циклы
//первый вариант
let num = 50;
while (num<=55) {
    console.log(num);
    num++;
}

//второй вариант
let num2=50;

do {
    console.log(num2);
    num2++;
}
while (num2<55)

//третий вариант
let num3=50;
for (let i=1; i<8; i++) {
    console.log (num3)
    num3++
}

//цикл с прерыванием, break тормозит цикл
for (let i=1; i<18; i++) {
    if (i ===6) {
        break;
    }
    console.log (i)
}

//цикл с пропуском, continue
for (let i=1; i<10; i++) {
    if (i ===6) {
        continue;
    }
    console.log (i)
}