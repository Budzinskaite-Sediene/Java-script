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
