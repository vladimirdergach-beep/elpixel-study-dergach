// Задача 1

let word1 = 'hello';
let word2 = 'world';

if (word1[word1.length-1] === word2[0]){
    console.log('совпадает');
} else {
    console.log('не совпадает');
}

// Задача 2

let arr = [0, 1, 2, 0, 3, 4, 0, 5, 6, 0, 7, 8,];

let zeroPosition = 0;

for(let i = 0; i < arr.length; i++) {

    if (arr[i] === 0) {
        zeroPosition++;
    }

    if (zeroPosition === 3) {
    console.log(i);
    break;
}
}

// Задача 3

let str = '12,34,56';
let arrStr = str.split(',');
let result = arrStr.reduce((sum, current) => sum + Number(current), 0);

console.log(result);

// Задача 4

let date = '2025-12-31';
let arrDate = date.split('-');

let dateObject = {
    year: arrDate[0],
    month: arrDate[1],
    day: arrDate[2],
};

console.log(dateObject);