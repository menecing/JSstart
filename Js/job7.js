"use strict"
//Упражение 7
// || line !== "number"
function calculateVolumeAndArea (line) {
    if (line <0 || typeof(line) !=='number' || !Number.isInteger(line)) {
        return  ('При вычислении произошла ошибка');
    }
    return (`Объем куба: ${line*line*line}, площадь всей поверхности: ${line*line*6}`);
}

calculateVolumeAndArea(25);

//задание 2
"use strict"

function getCoupeNumber (num) {
    if (typeof(num) !== "number"  || num < 0 || !Number.isInteger (num)) {
        return ("Ошибка. Проверьте правильность введенного номера места");
    }
    if (num == 0 || num > 36) {
    return ("Таких мест в вагоне не существует");
    }
    return (Math.ceil (num/4));
}

getCoupeNumber (5)
