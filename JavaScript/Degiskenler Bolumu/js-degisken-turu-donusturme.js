//************* Veri turunu ogrenmek ve tur donusumleri *************

// veri turunu ogrenmek typeof:
let price = 111;
let stringPrice = "111";
let hasPassword = true;

console.log("Price:", typeof price);
console.log("stringPrice:", typeof stringPrice);
console.log("hasPassword:", typeof hasPassword);

//string bilgileri int veya float'a donusturme:
let number1 = "11";
number1 = parseInt(number1);
console.log("number1:", number1, typeof number1);

let number2 = "11px";
number2 = parseInt(number2);
console.log("number2:", number2, typeof number2);

let number3 = "px11px";
number3 = parseInt(number3);
console.log("number3:", number3, typeof number3);

let number4 = "11px";
number4 = Number(number4);
console.log("number4:", number4, typeof number4);

let number5 = "11";
number5 = Number(number5);
console.log("number5:", number5, typeof number5);

let number6 = "11.4";
number6 = parseFloat(number6);
console.log("number6:", number6, typeof number6);

//number veri tipinden string'e donusturmek:
let number7 = 55;
number7 = number7.toString();
console.log(number7, typeof number7);
