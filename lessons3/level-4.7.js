// Задача 1

function sortAlphabet(str) {
    let arr = str.split(' ');
    arr.sort();
    let result = arr.join(' ');

    return result;
}

console.log(sortAlphabet('bbb aaa ccc'));

// Задача 2

function matchingElements(a, b) {
    let result = [];
    
    for (let i = 0; i < a.length; i++) {
        if (b.includes(a[i])) {
            result.push(a[i]);
        }
    }
    return result;
}

console.log(matchingElements([1, 2, 3], [4, 5, 6, 1, 3]));

// Задача 3

let previousNumber

function getRandomNumber(min, max) {
    let number;

    do {
        number = Math.floor(Math.random() * (max - min + 1) + min);
    } while (number === previousNumber);

    previousNumber = number
    return number;
}

console.log(getRandomNumber(1, 3));
console.log(getRandomNumber(1, 3));
console.log(getRandomNumber(1, 3));

// Задача 4

let arr = [1, 2, 3, 4, 5];

function elementArray(array, element) {
    
        let number = array.indexOf(element);

        if (number === array.length - 1) {
            return array[0]
        } else {
            return array[number + 1];
        }
}

console.log(elementArray(arr, 1)); // 2
console.log(elementArray(arr, 4)) // 5
console.log(elementArray(arr, 5)) // 1

