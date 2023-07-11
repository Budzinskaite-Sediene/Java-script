// 2023 - 07 - 10

let aktoriausVardas = "Richard";
let aktoriausPavarde = "Ghere";

if (aktoriausVardas.length > aktoriausPavarde.length) {
  console.log(aktoriausPavarde);
}

let gimimoMetai = 1986;
let sieMetai = 2023;
let vardasPavarde = "Daiva Budzinskaite-Sediene";
let metuSkaicius = sieMetai - gimimoMetai;

console.log(
  "Aš esu " + vardasPavarde + " . Man yra " + metuSkaicius + " metai"
);

let paskutines3 =
  aktoriausVardas[aktoriausVardas.length - 3] +
  aktoriausVardas[aktoriausVardas.length - 2] +
  aktoriausVardas[aktoriausVardas.length - 1] +
  aktoriausPavarde[aktoriausPavarde.length - 3] +
  aktoriausPavarde[aktoriausPavarde.length - 2] +
  aktoriausPavarde[aktoriausPavarde.length - 1];

console.log(paskutines3);

// 2023-07-11

let string = `Once upon a time in hollywood`;
string = string.replaceAll("o", "*");
string = string.replaceAll("O", "*");
console.log(string);

// let numberOne = Math.random();
// let numberTwo = Math.random();
// let numberThree = Math.random();
// let numberFour = Math.random();

// console.log(
//   `${Math.ceil(numberOne)} ${Math.ceil(numberTwo)} ${Math.floor(numberThree)} ${
//     Math.ceil(numberFour) * 2
//   }`
// );

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let one = rand(0, 2);
let two = rand(0, 2);
let three = rand(0, 2);
let four = rand(0, 2);
console.log(one);
console.log(two);
console.log(three);
console.log(four);

let number5 = rand(0, 4);
console.log(number5);
let number6 = rand(0, 4);
console.log(number6);

if (number5 > number6) {
  console.log(`6 uzduoties rezultatas: ${(number5 / number6).toFixed(2)}`);
} else {
  console.log(`6 uzduoties rezultatas: ${(number6 / number5).toFixed(2)}`);
}

let first = rand(0, 25);

console.log(first);

let second = rand(0, 25);

console.log(second);

let third = rand(0, 25);

console.log(third);

if (Math.min(first, second, third) < first < Math.max(first, second, third)) {
  console.log(first);
} else if (
  Math.min(first, second, third) <
  second <
  Math.max(first, second, third)
) {
  console.log(second);
} else if (
  Math.min(first, second, third) <
  third <
  Math.max(first, second, third)
) {
  console.log(third);
}
