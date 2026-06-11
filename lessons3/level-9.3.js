// Задача 1

let words = [
    'apple',
    'apricot',
    'banana',
    'blueberry',
    'cherry',
    'avocado',
    'blackberry',
    'cranberry',
    'almond',
    'date'
];

let letters = 'a';

function firstNumberRandomWord(arr, letter) {

    let result = arr.filter(word => word.startsWith(letter));

    let randomNum = Math.floor(Math.random() * result.length);

    return result[randomNum];
}

console.log(firstNumberRandomWord(words, letters));

// Задача 2

function getAllDatesWith42() {
    let result = [];

    let start = new Date(2001, 0, 1);
    let end = new Date(2099, 11, 31);

    while (start <= end) {
        let day = String(start.getDate()).padStart(2, '0');
        let month = String(start.getMonth() + 1).padStart(2, '0');
        let year = start.getFullYear();

        let dateString = day + '.' + month + '.' + year;

        let counter = 0;

        for (let i = 0; i < dateString.length; i++) {
            if (dateString[i] === '2') {
                counter++;
            }
        }

        if (counter === 4) {
            result.push(dateString);
        }

        start.setDate(start.getDate() + 1);
    }

    return result;
}

console.log(getAllDatesWith42());

// Задача 3

let points = [[1, 2], [2, 4], [3, 8], [4, 16], [5, 32]];

const canvas = document.getElementById("graph");
const ctx = canvas.getContext("2d");

let padding = 40;

let maxX = 0;
let maxY = 0;

for (let i = 0; i < points.length; i++) {
    if (points[i][0] > maxX) {
        maxX = points[i][0];
    }

    if (points[i][1] > maxY) {
        maxY = points[i][1];
    }
}

let scaleX = (canvas.width - padding * 2) / maxX;
let scaleY = (canvas.height - padding * 2) / maxY;

ctx.beginPath();
ctx.moveTo(padding, canvas.height - padding);
ctx.lineTo(canvas.width - padding, canvas.height - padding);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(padding, canvas.height - padding);
ctx.lineTo(padding, padding);
ctx.stroke();

for (let i = 0; i < points.length; i++) {
    let x = points[i][0];
    let y = points[i][1];

    let canvasX = padding + x * scaleX;
    let canvasY = canvas.height - padding - y * scaleY;

    ctx.beginPath();
    ctx.arc(canvasX, canvasY, 5, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillText('(' + x + ', ' + y + ')', canvasX + 8, canvasY - 8);
}