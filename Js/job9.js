"use strict"

function fib (total) {
let one = '0';
let two = '1';
let space = ' ';
    if (typeof(total) != "number" || total===0) {
        return ('');
    }

    if (total === 1) {
        return (one);
    }
    if (total === 2) {
        return (one+space+two);
    }
}
switch (total) {
    case 1:
    return (String(total));
    case 2:
    
}

fib (2);