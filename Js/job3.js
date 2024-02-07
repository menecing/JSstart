/*При помощи цикла выведите числа от 5 до 10 в консоль. 5 и 10 включительно. Цикл можно использовать любой
При помощи цикла for вывести числа от 20 до 10 в консоль. В обратном порядке (20, 19, 18...). Когда цикл дойдет до числа 13 - остановить весь цикл
При помощи цикла for выведите чётные числа от 2 до 10 включительно
Перепишите цикл  for на вариант с while. Результат должен остаться точно таким же. Не создайте бесконечный цикл! Иначе браузер может зависнуть.
Цикл, который нужно переписать: for (let i = 2; i <= 16; i++){if (i % 2 === 0){continue; }else { console.log(i); }}
*/

let num=5;
while (num<=10) {
    console.log(num)
    num++
}

let num2=5;
do {
    console.log (num2);
    num2++
} 
while (num2<=10);

for (let i=5; i<=10;i++) {
    console.log(i)
}

//задание №2
for (let i=20; i>=10;i--) {
    if (i===13) {
        break
    };
    console.log(i)
}

//задание №3
for (let i=2; i<=10;i=i+2) {
    console.log(i)
}

for (i=2;i<=10;i++) {
    if (i%2 === 1) {
        continue
    } else {
        console.log (i)
    }
}
//задание №4
for (let i = 2; i <= 16; i++){
    if (i % 2 === 0){
        continue; }
        else { 
            console.log(i); 
        }}


let i=2;
while (i<=16) {
    if (i % 2 === 0){
        i++;
        continue  
    }    else {
        console.log(i);
    };
        i++
        }


const arrayOfNumbers = [];

for (let i = 5; i < 11; i++) {
    arrayOfNumbers[i - 5] = i;
    }
console.log(arrayOfNumbers);
