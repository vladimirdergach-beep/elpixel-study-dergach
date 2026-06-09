// Задача 1

let array = [];
for(let i = 0; i < 100; i++) {
array.push(Math.floor(Math.random() * 100) + 1);
}
console.log(array);

// Задача 2

let num = 12345;
let str = String(num);

for(let i = str.length - 1; i >= 0; i--) {
    console.log(str[i]);
}

// Задача 3

let arr = [1, 2, 3, 4, 5, 6,];


for(let i = 0; i < arr.length; i += 2) {
    console.log(arr.slice(i, i+2));
}

// Задача 4

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let arr12 = arr1.concat(arr2)

console.log(arr12);