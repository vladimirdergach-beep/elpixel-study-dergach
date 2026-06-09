// Задача 1

let num = 1234;
console.log(String(num)[0]);

// let str = String(num);
// console.log(str[0]);

// Задача 2

console.log(String(num)[String(num).length - 1]);
//console.log(str[str.length - 1]);

// Задача 3

console.log(Number(String(num)[String(num).length - 1]) + Number(String(num)[0]));
// let FirstNum = Number(String(num)[0]);
// let LastNum = Number(String(num)[String(num).length - 1]);
//console.log(FirstNum + LastNum);

// Задача 4

console.log(String(num).length);
//console.log(str.length);

// Задача 5

let num1 = 22345;
if (String(num)[0] === String(num1)[0]) {
    console.log('первые цифры совпадают');
} else {
    console.log('первые цифры не совпадают');
}