//Управжнение №4
"use strict"
//Задание 1
const arr = [3, 5, 8, 16, 20, 23, 50];
const result = [];
const quantity = arr.length;
for (i=0;i<quantity;i++) {
    result [i] = arr [i];
}
console.log (result);

//Задание 2
const data = [5, 10, 'Shopping', 20, 'Homework'];
//[ 10, 20, 'Shopping - done', 40, 'Homework - done' ]
const quantity2 = data.length;
for (i=0;i<quantity2;i++) {
    if (typeof(data[i])== "number") {
    data [i]=+data[i]*2;
    } else {
        data [i]=data[i]+" - done";
    }
}
console.log (data);

//Задание 3
const data = [5, 10, 'Shopping', 20, 'Homework'];
const quantity2 = data.length;
const result2 = [];
for (i=0;i<quantity2;i++) {
    result2 [i] = data [quantity2-1-i]
}
console.log (result2);