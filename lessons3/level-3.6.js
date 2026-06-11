// Задача 1

let arrNum = [1124, 346, 41256, 15125156, 2145745, 745,];
let resultNum = [];

for (let i = 0; i < arrNum.length; i++) {
    if (String(arrNum[i]).length <= 3) {
        resultNum.push(arrNum[i]);
    }
}

console.log(resultNum);

// Задача 2

let num = 12345;
let strNum = String(num);
let MoreThanZero = true;

for (let i = 0; i < strNum.length; i++) {
    if (Number(strNum[i]) === 0) {
        MoreThanZero = false;
        break;
    }
}

if (MoreThanZero) {
    console.log('Все цифры этого числа больше нуля');
} else {
    console.log('Не все цифры этого числа больше нуля');
}

// Задача 3

let arr = [123, 456, 789];
let result = [];

for (let i = 0; i < arr.length; i++) {
    let str = String(arr[i]);
    let numbers = str.split('');

    for (let y = 0; y < numbers.length; y++) {
    result.push(Number(numbers[y]));
    }
}

console.log(result);

// Задача 4

let data = [
	{
		1: 11,
		2: 12,
		3: 13,
	},
	{
		1: 21,
		2: 22,
		3: 23,
	},
	{
		1: 24,
		2: 25,
		3: 26,
	},
];

let sum = 0;

for (let i = 0; i < data.length; i++) {
    for (let key in data[i]) {
        sum += data[i][key];
    }
}

console.log(sum);

