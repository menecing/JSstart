"use strict"

for (let i=5;i<11;i++) {
    console.log(i);
}

let i=5;
while (i<11) {
    console.log (i);
    i++;
}

let i=5;
do {
    console.log (i);
    i++;   
}

while (i<=10);

for (let i=20;i>=10;i--) {
    if (i===13) {
        break;
    };
    console.log (i);
}

for (let i=2;i<=10;i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
    i++;
}

for (let i = 2; i <= 16; i++){
    if (i % 2 === 0){
        continue; 
    }else { 
        console.log(i); 
    }
}

let i=2;
while (i<=16) {
    if (i % 2 === 0) {
        i++;
        continue;
    }
    console.log (i);
    i++;
};

let arr = [];

for (let i=5;i<=10;i++) {
    arr [i-5] = i;
}
console.log (arr)

const options = {
    name: 'test',
    width: 1024,
    heigth: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function () {
        console.log ('Test');
    }
};
let counter = 0;
for (let key in options) { //перебор свойств объекта с выводом ключа и его значения
    if (typeof (options [key]) === 'object') {
        for (let i in options [key]) {
        console.log (`Свойство ${i} имеет значение ${options [key][i]}`);
        counter++;
        }
    } else {
    console.log (`Свойство ${key} имеет значение ${options [key]}`);
    counter++;
    }
};

console.log (counter)