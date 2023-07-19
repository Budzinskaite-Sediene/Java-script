function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Sugeneruokite masyvą iš 30 elementų (indeksai nuo 0 iki 29), kurių reikšmės yra atsitiktiniai skaičiai nuo 5 iki 25.

const array = [];

for (let i = 0; i < 30; i++) {
  array[i] = rand(5, 25);
}

document.write("<h2>Main array</h2>", array);

// Naudodamiesi 1 uždavinio masyvu:
// Suskaičiuokite kiek masyve yra reikšmių didesnių už 10;

let counter = 0;

for (const value of array) {
  if (value > 10) counter++;
}

document.write("<h3>Values more than 10</h3>", counter);

// Raskite didžiausią masyvo reikšmę ir jos indeksą arba indeksus jeigu yra keli;

const indexes = [];
let max = Math.max(...array);

for (const i in array) {
  if (array[i] === max) indexes.push(i);
}

document.write(
  `<h3>Biggest value: ${max}, an index or indexes of this value:</h3>`,
  indexes
);

// Suskaičiuokite visų porinių (lyginių) indeksų reikšmių sumą;

let sum = 0;
let evenArray = [];

for (const i in array) {
  if (i % 2 === 0) sum += array[i];
  evenArray.push(array[i]);
}

document.write("<h3>Even numbers:</h3>", evenArray);
document.write("<h3>Even numbers index count sum:</h3>", sum);
console.log(evenArray);

// Sukurkite naują masyvą, kurio reikšmės yra 1 uždavinio masyvo reikšmes minus tos reikšmės indeksas;

let newArray = [];

for (const i in array) {
  newArray[i] = array[i] - i;
}

document.write(
  `<h4>New array: value is first Array values minus index: ${newArray}`
);

// Papildykite masyvą papildomais 10 elementų su reikšmėmis nuo 5 iki 25, kad bendras masyvas padidėtų iki indekso 39;

for (let i = 0; i < 10; i++) {
  newArray[newArray.length] = rand(5, 25);
}

document.write(`<h4>${newArray}</h4>`);

// Iš masyvo elementų sukurkite du naujus masyvus. Vienas turi
// būti sudarytas iš neporinių indeksų reikšmių, o kitas iš porinių;

let first = [];
let second = [];

for (const i in newArray) {
  if (i % 2 === 0) first.push(newArray[i]);
  else second.push(newArray[i]);
}

document.write(`<h4>First array: ${first}</h4>`);
document.write(`<h4>Second array: ${second}</h4>`);

// Pirminio masyvo elementus su poriniais indeksais padarykite
// lygius 0 jeigu jie didesni už 15;

const tempArray = [...array];

for (const i in array) {
  if (i % 2 === 0 && array[i] > 15) array[i] = 0;
}

document.write(`<h4>Nulintas masyvas: ${array}</h4>`);

// Naudodami funkciją splice() iš masyvo ištrinkite visus
// elementus kurių reikšmės didesnės už 10;

// for (let i = newArray.length - 1; i >= 0; i--);
// {
//   if (newArray[i] > 10) newArray.splice(i, 1);
// }

// document.write(
//   `<h4>Masyvas su pašalintomis reikšmėmis didesnėmis nei 10: ${newArray}</h4>`
// );

for (let i = tempArray.length - 1; i >= 0; i--) {
  if (tempArray[i] > 10) tempArray.splice(i, 1);
}

document.write(`<h4>Array with erased values more than 10: ${tempArray}</h4>`);

// Naudodami funkciją splice() iš masyvo ištrinkite visus elementus turinčius porinį indeksą;

for (let i = tempArray.length - 1; i >= 0; i--) {
  if (i % 2 === 0 && array[i]) tempArray.splice(i, 1);
}

document.write(`<h4>Array with erased even index values: ${tempArray}</h4>`);
