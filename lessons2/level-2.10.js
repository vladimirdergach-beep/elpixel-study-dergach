// Задача 1

let str = 's123hj5125';
let counter = 0;

for(let i = 0; i < str.length; i++) {
    if (Number.isNaN(Number(str[i]))) {
        counter++;
    } 
}

if (counter <= 3) {
    console.log('в строке не более 3 букв');
} else {
    console.log('в строке более 3 букв');
}

// Задача 2

let num = 65351;
let str1 = String(num);
let arrNum = str1.split('');

for(let i = arrNum.length - 1; i >= 0; i--) {
        if (Number(arrNum[i]) % 2 === 0) {
        console.log(Number(arrNum[i]));
        break;
    }
}

// Задача 3

let str2 = 'abcde abcde abcde';
let result = '';

for (let i = 0; i < str2.length; i++) {
    if (i === 0) {
        result += '!';
    } else if (str2[i-1] === ' ') {
        result += '!';
    } else {
        result += str2[i];
    }
}

console.log(result);

// Задача 4

let arr = [1, 2, 3, 3, 4, 5];

for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i+1]) {
        console.log('в массиве есть два одинаковых элемента подряд');
        break;
    }
}