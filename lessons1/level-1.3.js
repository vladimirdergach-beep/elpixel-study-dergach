// Задача 1

let string = 'kotiki';

if (string.length > 1) {
    console.log(string[string.length - 2]);
}
else {
    console.log('В строке не больше 1 символа')
}

// Задача 2

let num1 = 10;
let num2 = 3;

if (num1 % num2 === 0){
    console.log('делится без остатка');
}
else{
    console.log('делится с остатком')
}