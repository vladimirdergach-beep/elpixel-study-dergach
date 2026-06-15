//Задача 1

let str = 'hikuj21bjhk21b54';
let arr = str.split('');

for(let i = 0; i < str.length; i++) {
    if (!Number.isNaN(Number(arr[i]))) {
        console.log(i);
        break;
    } 
}

//Задача 2

let obj = {
    id: 1,
    name: 'John',
    age: 30,
};

let keys = [];
let values = [];

for (let key in obj) {
    
    keys.push(key);
    
    values.push(obj[key]);
}

console.log(keys);
console.log(values);

//Задача 3

let num = 134;
let strNum = String(num);
let arrNum = strNum.split('');
let even = 0;

for(let i = 0; i < arrNum.length; i++) {

    if (Number(arrNum[i]) % 2 === 0) {
        even++;
    }
}

console.log(even);

//Задача 4

let str1 = 'abcde';
let result = '';

for (let i = 0; i < str1.length; i++) {

    if (i % 2 === 0) {
        result += str1[i].toUpperCase();
    } else {
        result += str1[i]
    }
}

console.log(result);

//Задача 5

let str2 = 'aaa bbb ccc';
let result1 = '';

for (let i = 0; i < str2.length; i++) {
    if (i === 0) {
        result1 += str2[i].toUpperCase();
    } else if (str2[i-1] === ' ') {
        result1 += str2[i+1].toUpperCase();
    } else {
        result1 += str2[i];
    }
}

console.log(result1);