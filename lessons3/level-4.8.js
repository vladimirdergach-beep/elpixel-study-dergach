// Задача 1

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

console.log(getRandomElement([1, 2, 3, 4]));

// Задача 2

function getRandomArray(array, N) {
  let arr = [];
  let previousNumber;

  for (let i = 0; i < N; i++) {
    let num;

    do {
      num = array[Math.floor(Math.random() * array.length)];
    } while (num === previousNumber);

    previousNumber = num;
    arr.push(num);
  }
  return arr;
}

console.log(getRandomArray([1, 2, 3, 4], 10));

// Задача 3

let previousElement = null;

function getRandomElementWithoutRepeat(arr) {
  let element;

  do {
    element = arr[Math.floor(Math.random() * arr.length)];
  } while (element === previousElement);

  previousElement = element;
  return element;
}

console.log(getRandomElementWithoutRepeat([1, 2, 3]));
console.log(getRandomElementWithoutRepeat([1, 2, 3]));
console.log(getRandomElementWithoutRepeat([1, 2, 3]));

// Задача 4

function getPrimeNumbers(min, max, N) {
  let arr = [];

  while (arr.length < N) {
    let num = Math.floor(Math.random() * (max - min + 1) + min);
    let count = 0;

    for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
        count++;
      }
    }

    if (count === 2) {
      arr.push(num);
    }
  }

  return arr;
}

console.log(getPrimeNumbers(7, 121, 5));

// Задача 5

function getArraySum(...numbers) {
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }
  return result;
}

console.log(getArraySum(1, 2, 3, 5, 7, 89, 9));

// Задача 6

function randomNumbers(min, max, N) {
  let arr = [];
  for (let i = 0; i < N; i++) {
    arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return arr;
}

console.log(randomNumbers(73, 105, 15));

// Задача 7

function getUniqueRandomNumbers(min, max, N) {
  let arr = [];

  while (arr.length < N) {
    let num = Math.floor(Math.random() * (max - min + 1)) + min;

    if (!arr.includes(num)) {
      arr.push(num);
    }
  }

  return arr;
}

console.log(randomNumbers(73, 105, 15));
