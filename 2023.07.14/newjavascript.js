function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let result = "";
for (let i = 1; i <= 100; i++) {
  if ((i - 1) % 11 === 0 || (i - 10) % 9 === 0) {
    result += '<span style="color: red">*</span> ';
  } else {
    result += "* ";
  }
  if (i % 10 === 0) {
    result += "<br>";
  }
}
document.write(`<p style="letter-spacing: 3px">${result}</p>`);

// Naudokite funkcija rand(). Atspausdinkite 3 skaičius nuo -10 iki 10. Skaičiai mažesni už 0 turi būti žali, 0 - raudonas, didesni už 0 mėlyni.
// Sukurkite kintamąjį su stringu: “An American in Paris”. Jame ištrinti visas balses. Rezultatą atspausdinti. Kodą pakartoti su stringais: “Breakfast at Tiffany's”, “2001: A Space Odyssey” ir “It's a Wonderful Life”.
// Sugeneruokite 300 atsitiktinių skaičių nuo 0 iki 300, atspausdinkite juos atskirtus tarpais ir suskaičiuokite kiek tarp jų yra didesnių už 150.  Skaičiai didesni nei 275 turi būti raudonos spalvos.
// // Vienoje eilutėje atspausdinkite visus skaičius nuo 1 iki 3000, kurie dalijasi iš 77 be liekanos. Skaičius atskirkite kableliais. Po paskutinio skaičiaus kablelio neturi būti. Jeigu reikia, panaudokite css, kad visi rezultatai matytųsi ekrane.

// Rutos
// let penkiosVinys = 85 * 5;

// let ikalimoGylis1 = 0; //mm

// let smugiuKiekis1 = 0;

// for (let i = 0; true; i++) {
//   let vienasIkalimas = rand(5, 20);

//   smugiuKiekis1++;

//   ikalimoGylis1 += vienasIkalimas;

//   if (ikalimoGylis1 >= penkiosVinys) {
//     break;
//   }
// }

// document.getElementById(
//   "vinys1"
// ).innerText = `Kiek reikia smūgių: ${smugiuKiekis1}`;

// // Gabrieles

// for (let i = 1; i <= 5; i++) {
//   let strikes = 0;

//   let nailLength = 85;

//   while (nailLength > 0) {
//     let depth = rand(5, 20);

//     //uztikrinamas kad nevirsytu 85 ilgio

//     if (depth > nailLength) {
//       depth = nailLength;
//     }

//     console.log("Ikalimo gylis: ", depth);

//     document.write("<br>Ikalimo gylis: ", depth);

//     nailLength -= depth;

//     strikes++;

//     if (nailLength <= 0) {
//       console.log("Vinis ", i, "ikalta is ", strikes, " smugiu");

//       document.write(`<br>Vinis ${i} ikalta is ${strikes} smugiu`);

//       break;
//     }
//   }
// }

// Sugeneruokite stringą, kurį sudarytų 50 atsitiktinių skaičių nuo 1 iki 200,
//   atskirtų tarpais.Skaičiai turi būti unikalūs(t.y.nesikartoti).Sugeneruokite
//   antrą stringą, pasinaudodami pirmu, palikdami jame tik pirminius skaičius(t.y tokius,
//     kurie dalinasi be liekanos tik iš 1 ir patys savęs).Skaičius stringe sudėliokite didėjimo
// tvarka, nuo mažiausio iki didžiausio.

let randomFigure = rand(1, 200);
result = "";
for (let i = 1; i <= 50; i++);
result = +randomFigure + "*";

console.log(randomFigure);

document.write(randomFigure);
