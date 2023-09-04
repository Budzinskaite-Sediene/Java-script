// function math(a, fn) {
//   let rez = a * a;

//   fn([4, 8, 8, "laba diena"]);
// }

// math(4, (param) => {
//   for (const prod of param) {
//     console.log(prod);
//   }
// });

// function sum(a, b) {
//   return a + b;
// }
// console.log(sum(4, 8));

let rainForests = ["Amazon", "Borneo", "Cerado", "Congo"];
rainForests.splice(0, 2);
console.log(rainForests);


for (let [index, value] of cipherText.entries()) {
  plainText += index % 2 === 0 ? value : '';
}