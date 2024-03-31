"use strict"
//Книга "Грокаем алгоритмы"
//Бинарный поиск
const start= new Date().getTime();

const arr = [1,3,5,7,9,11,13,15,17,18,20,23,25,27,29,31,35];

function binarySearch (list,item) {
    let low = 0;
    let high = list.length-1;
        while (low <=high) {
            let mid = Math.round((low+high)/2);
            let guess = list [mid];
                if (guess === item) {
                return mid
                } else if (guess > item) {
                    high = mid -1;
                } else {
                    low = mid+1;
                };
        };
        return ('None');
};

binarySearch (arr,27);

const end = new Date().getTime();
console.log(`SecondWay: ${end - start}ms`);


//Обычный поиск

const arr2 = [1,3,5,7,9,11,13,15,17,18,20,23,25,27,29,31,35];
const start2= new Date().getTime();
console.log (arr.indexOf(29));
const end2 = new Date().getTime();
console.log(`SecondWay: ${end - start}ms`);
