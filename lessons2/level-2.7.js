// Задача 1

let str = 'a bc def ghij';
let words = str.split(' ');
let result = [];

for (let i = 0; i < words.length; i++) {
    if (words[i].length <= 3) {
        result.push(words[i].toUpperCase());
    } else {
        result.push(words[i]);
    }
}
console.log(result.join(' '));

// Задача 2

let sym = 'C';
let check = sym.toUpperCase();
if (check === sym) {
    console.log('символ в верхнем регистре');
} else {
    console.log('символ в нижнем регистре');
}

// Задача 3

let num = 123789;
let str1 = String(num);
let arr = str1.split('');
let result1 = [];

for (let i = 0; i < arr.length; i++) {
    if (Number(arr[i]) % 2 === 0) {
        result1.push(arr[i]);
    }
}

console.log(result1.join(''));