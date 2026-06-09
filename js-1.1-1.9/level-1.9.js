// Задача 1

let strings = ['string1', 'http://string2', 'sting3', 'string4.html',];
strings = strings.filter(start => start.startsWith('http://'));
console.log(strings);  

// Задача 2

let strings1 = ['string1', 'http://string2', 'sting3', 'string4.html',];
strings1 = strings1.filter(end => end.endsWith('.html'));
console.log(strings1);

// Задача 3

//let arr = [10, 20, 30, 40, 50,];
//for (let num of arr) {
//  console.log(num + num*0.1);
//}

