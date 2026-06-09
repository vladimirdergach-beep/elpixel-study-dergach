// Задача 1

let string = 'abcde';
let arrayStr = string.split('')

console.log(arrayStr);

// Задача 2

let num = 12345;
let str = String(num);
let arrayNum = str.split('');

console.log(arrayNum);

// Задача 3

arrayNum.reverse();
let reverseNum = Number(arrayNum.join(''));
console.log(reverseNum);

// Задача 4

let num1 = 12345;
let str1 = String(num1);
let arrayNum1 = str1.split('');

let result = arrayNum1.reduce((sum, current) => sum + Number(current), 0);

console.log(result);