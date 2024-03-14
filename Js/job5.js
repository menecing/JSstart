"use strict"
const lines = 5;
let result ='';
 
for (let i=0; i <= lines; i++) {
for (let k=0; k <lines-i;k++) {
result+= " ";
};
for (let j=0; j <i*2+1; j++) {
result+= "*";
};
result += '\n';
}
console.log (result);