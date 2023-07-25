// Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 200.
// Suskaičiuokite kiek yra kiekvienos raidės.
// Išrūšiuokite 1 uždavinio masyvą pagal abecėlę.
// Sugeneruokite 3 masyvus pagal 1 uždavinio sąlygą.
// Sudėkite masyvus, sudėdami reiksmes pagal atitinkamus indeksus.
// Paskaičiuokite kiek unikalių(po vieną, nesikartojančių) reikšmių ir kiek unikalių kombinacijų gavote.

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const letters = "ABCD";
const lettersArray = [];
let A = 0;
let B = 0;
let C = 0;
let D = 0;

for (let i = 0; i < 200; i++) {
  const letter = letters[rand(0, letters.length - 1)];
  lettersArray.push(letter);

  if (letter === "A") A++;

  if (letter === "B") B++;

  if (letter === "C") C++;

  if (letter === "D") D++;
}

document.write(lettersArray, A, B, C, D);
document.write(`<h3> A letters are: ${A}`);
document.write(`<h3> B letters are: ${B}`);
document.write(`<h3> C letters are: ${A}`);
document.write(`<h3> D letters are: ${A}`);

lettersArray.sort();

console.log(lettersArray);

// 2 užduotis

function threeArrays() {
  const arr = [];
  for (let i = 0; i < 200; i++) {
    const index = rand(0, 3);
    arr.push(letters[index]);
  }
  return arr;
}

const arrayOne = threeArrays();
const arrayTwo = threeArrays();
const arrayThree = threeArrays();
const arrayFour = [];

let letterCounter = 0;
let combinationCounter = 0;
for (let i = 0; i < arrayOne.length; i++) {
  const val = arrayOne[i] + arrayTwo[i] + arrayThree[i];
  arrayFour.push(val);

  if (val === "AAA") letterCounter++;
  if (val === "BBB") letterCounter++;
  if (val === "CCC") letterCounter++;
  if (val === "DDD") letterCounter++;

  if (!arrayFour.includes(arrayFour[i])) {
    combinationCounter++;
  }
}

console.log("Naujas array ", arrayFour);
document.write(`<h4>First array: ${arrayOne}`);
document.write(`<h4>Second array: ${arrayTwo}`);
document.write(`<h4>Third array: ${arrayThree}`);

document.write(`<h4>Naujas masyvas sudėtas iš trijų kitų: ${arrayFour}`);
console.log("Uh4>Unique values are: ", arrayFour.length - letterCounter);
document.write(`<h4>Unique values are: ${letterCounter}`);
console.log("Unique combinations are: ", combinationCounter);
document.write(`<h4>Unique combinations are: ${combinationCounter}`);

// 4 užduotis
// Sugeneruokite du masyvus, kurių reikšmės yra atsitiktiniai skaičiai nuo 100 iki 999.
// // Masyvų ilgiai 100. Masyvų reikšmės turi būti unikalios savo masyve(t.y.neturi kartotis).

// function getRandomNumber(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

const newArrayOne = [];
const newArrayTwo = [];

while (newArrayOne.length < 100) {
  let uniqueOne = rand(100, 999);
  if (!newArrayOne.includes(uniqueOne)) {
    newArrayOne.push(uniqueOne);
  }
}

while (newArrayTwo.length < 100) {
  let uniqueTwo = rand(100, 999);
  if (!newArrayTwo.includes(uniqueTwo)) {
    newArrayTwo.push(uniqueTwo);
  }
}

console.log(newArrayOne);
document.write(`<h4>First new array:</h4> ${newArrayOne}`);
console.log(newArrayTwo);
document.write(`<h4>Second new array:</h4> ${newArrayTwo}`);

// // Sugeneruokite masyvą, kuris būtų sudarytas iš reikšmių, kurios yra pirmame 3 uždavinio masyve,
// // bet nėra antrame 3 uždavinio masyve.

const arrayFromThird = [];
for (const i in newArrayOne) {
  if (newArrayOne[i] !== newArrayTwo[i]) {
    arrayFromThird.push(newArrayOne[i]);
  }
}
document.write(
  `<h4>Array made from third task 1st array values: ${arrayFromThird}`
);

// // Sugeneruokite masyvą iš elementų, kurie kartojasi abiejuose 4 uždavinio masyvuose.

// 7 užduotis
// // Sugeneruokite masyvą, kurio indeksus sudarytų pirmo 4 uždavinio masyvo reikšmės,
// // o jo reikšmės būtų iš antrojo masyvo.

const newArr = [];
for (const i in newArrayOne) {
  newArr[newArrayOne[i]] = newArrayTwo[i];
}
document.write(`Sugeneruotas masyvas: ${newArr}`);
console.log("Paskutinis masyvas, ", newArr);
