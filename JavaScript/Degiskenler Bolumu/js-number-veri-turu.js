// *********************** number **************
// number veri turu tanimlamak:
let price = 100;
let tax = 0.18;
let priceTax = price * tax;
console.log("Fiyat:", price, "KDV Oranı:", tax, "KDV Tutarı:", priceTax);
let total = price + priceTax;
console.log(
  "Fiyat:",
  price,
  "KDV Oranı:",
  tax,
  "KDV Tutarı:",
  priceTax,
  "Total Fiyat:",
  total
);

//rakamsal olarak tutulmamış bilgiyi rakamsal olarak tutmaya çevirme işlemi:
let stringNumber = "11";
console.log(stringNumber);
let newNumber = Number(stringNumber);
console.log(newNumber);
console.log(Number("101"));
// arttırma ve azaltma işlemleri
let counter = 320;
counter = counter + 1; //uzun yöntem
counter += 1;
counter++; //en kısa yol
console.log(counter);

counter = counter - 1; //uzun yöntem
console.log(counter);
counter--;
console.log(counter);

counter *= 10;
console.log(counter);

counter /= 5;
console.log(counter);

//islem onceligi
console.log(2 + 3 * 10); //3 ve 10 çarpar ve 2 ekler
console.log((2 + 3) * 10);

//mod(kalan) alma %
// sayi tek tek mi cift mi?
console.log(15 % 2);
console.log(14 % 2);

// 8 urun alan koliye tum urunler sigiyor mu?
console.log("Koli örneğinde kalan ürün sayısı:", 18 % 8);

// us alma **
console.log(2 * 2 * 2 * 2);
console.log(2 ** 4);

//asagı yuvarlama ve yukarı yuvarlama. bir kutuphane kullanılacak.Math.floor
console.log("Aşağı yuvarlama:", Math.floor(1.7));

//yukarı yuvarlamak için:Math.ceil
console.log("Yukarı yuvarlama", Math.ceil(1.7));

//yakina yuvarlama  ->Math.round
console.log("Yakın olana yuvarlama:", Math.round(1.9));
