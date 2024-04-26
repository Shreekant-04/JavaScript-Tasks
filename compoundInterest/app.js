let p = 2000;
let r = 18 / 100;
let t = 3;
let n = 1;

let amount = p *((1 + r / n) ** (n * t));
console.log(`The compound interest after ${t} years is : ${amount.toFixed(2)}`);
