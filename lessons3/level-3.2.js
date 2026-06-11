// Задача 1

let array = [];
for(let i = 10; i <= 1000; i++) {
    let str = String(i);
    let preLastNum = str[str.length - 2];
    
    if(preLastNum % 2 === 0) {
        array.push(i);
    }
}
console.log(array);

// Задача 2

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,];
let result = [];

for (let i = 0; i < arr.length; i++) {
    if ((i + 1) % 5 !== 0){
        result.push(arr[i]);
    }
}

console.log(result);

// Задача 3

let num = 5;
let strZero = '';

for (let i = 0; i < num; i++) {
    strZero += '0';
}

console.log(strZero);

// Задача 4

let strWords = 'aaa bbb ccc eee fff';
let arrWords = strWords.split(' ');
let arrResult = [];

for (let i = 0; i < arrWords.length; i++) {
    if (i % 2 === 0) {
        arrResult.push(arrWords[i]);
    }
}

console.log(arrResult.join(' '));

// Задача 5

let matrix = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];
let sum = 0;

for (let i = 0; i < matrix.length; i++) {
    for (let y = 0; y < matrix[i].length; y++) {
        sum += matrix[i][y];
    }
}

console.log(sum);