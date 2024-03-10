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