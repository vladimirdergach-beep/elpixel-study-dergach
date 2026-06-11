function getLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

function getNext29February() {
  let today = new Date();
  let today1 = new Date(today.getFullYear(), today.getMonth(), today.getDate());

  let year = today.getFullYear();

  while (true) {
    if (getLeapYear(year)) {
      let feb29 = new Date(year, 1, 29);

      if (feb29 >= today1) {
        let diff = feb29 - today1;
        return diff / (1000 * 60 * 60 * 24);
      }
    }

    year++;
  }
}

console.log(getNext29February());

// Задача 2

function getLastSundayFebruary(year) {
  let date = new Date(year, 2, 0);

  while (date.getDay() !== 0) {
    date.setDate(date.getDate() - 1);
  }

  return date;
}

function getNextMaslenitsa() {
  let today = new Date();

  let today1 = new Date(today.getFullYear(), today.getMonth(), today.getDate());

  let year = today.getFullYear();

  while (true) {
    let maslenitsaDate = getLastSundayFebruary(year);

    if (maslenitsaDate >= today1) {
      return maslenitsaDate;
    }

    year++;
  }
}

console.log(getNextMaslenitsa());

// Задача 3

function getRandomColor() {
  let hexSymbols = "0123456789ABCDEF";
  let result = "#";

  for (let i = 0; i < 6; i++) {
    let randomHex = Math.floor(Math.random() * 16);
    result += hexSymbols[randomHex];
  }

  return result;
}

console.log(getRandomColor());

// Задача 4

function getDivisorsArray(arr) {
  let countArray = [];
  let min = Math.min(...arr);

  for (let i = 1; i <= min; i++) {
    let commonDivisor = true;

    for (let y = 0; y < arr.length; y++) {
      if (arr[y] % i !== 0) {
        commonDivisor = false;
        break;
      }
    }
    if (commonDivisor) {
      countArray.push(i);
    }
  }
  return countArray;
}

console.log(getDivisorsArray([2, 4, 3, 11]));

// Задача 5

  function getMaxNumbers(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
      let max = arr[i][0];

      for (let y = 0; y < arr[i].length; y++) {
        if (arr[i][y] > max) {
          max = arr[i][y];
        }
      }

      result.push(max);  
    }

    return result;
  }

  console.log(getMaxNumbers([
    [1, 5, 3],
    [9, 2, 4],
    [7, 8, 6]
]));