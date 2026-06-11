// Задача 1

function getDivisorsCount(num) {
    let count = 0;

    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            count++
        }
    }
    return count;
}

console.log(getDivisorsCount(6));

// Задача 2

function getZodiacSign(date) {
    let arrDate = date.split('.');
    let month = Number(arrDate[1]);
    let day = Number(arrDate[0]);

    if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
        return 'Козерог';
    } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
        return 'Водолей';
    } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
        return 'Рыбы';
    } else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
        return 'Овен';
    } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
        return 'Телец';
    } else if ((month === 5 && day >= 21) || (month === 6 && day <= 21)) {
        return 'Близнецы';
    } else if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) {
        return 'Рак';
    } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
        return 'Лев';
    } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
        return 'Дева';
    } else if ((month === 9 && day >= 23) || (month === 10 && day <= 23)) {
        return 'Весы';
    } else if ((month === 10 && day >= 24) || (month === 11 && day <= 21)) {
        return 'Скорпион';
    } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
        return 'Стрелец';
    }
}    

console.log(getZodiacSign('26.04.2003'));

// Задача 3

function getDivisorsArray(num) {
    let countArray = [];

    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            countArray.push(i);
        }
    }
    return countArray;
}

console.log(getDivisorsArray(6));

// Задача 4

function checkPrimeNumber(num) {
    let count = 0;

    if (num === 1) {
        return 'Не простое и не составное';
    }

    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            count++;
        }
    }
    if (count === 2){
        return 'Простое';
    } else {
        return 'Составное';
    }
    
}

console.log(checkPrimeNumber(7));

// Задача 5

function withoutEven(num) {
    let arr = [];

    for (let i = 0; i <= String(num).length - 1; i++) {
        if (String(num)[i] % 2 !== 0) {
            arr.push(String(num)[i]);
        }
    }
    return Number(arr.join(''));
}

console.log(withoutEven(91381));

// Задача 6

function randomNumbers(min, max) {
    let N = [];
    for (let i = 0; i < 10; i++) {
        N.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return N;
}

console.log(randomNumbers(73, 105))
