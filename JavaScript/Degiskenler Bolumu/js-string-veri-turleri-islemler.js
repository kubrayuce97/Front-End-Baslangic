// ******** String Veri turu İslemleri **********
let email = "kubra@gmail.com";
let firstName = "Kubra";
let lastName = "Yuce";

// string karakter sayisi: ->length
console.log(email.length);
console.log(firstName.length);
console.log(lastName.length);

//ılk karakteri bulmak -> [0];
console.log(firstName[0]);
console.log(firstName.charAt(0));

//buyuk / kucuk harf:
firstName = firstName.toUpperCase();
console.log(firstName);

firstName = firstName.toLowerCase();
console.log(firstName);

// string icinde istedigimiz bilgiyi aramak ve yerini bulmak -> search:
console.log(email.search("@"));
console.log(email[5]);

email.search("olmayan"); //-1 sonucunu verir.içinde olmayan bir şeyi aratırsak.

// belli bir yere kadar al -> slice: (domain bilgisi)
let DOMAIN = email.slice(email.search("@"));
console.log(DOMAIN);

let DOMAIN1 = email.slice(email.search("@") + 1);
console.log(DOMAIN1);

console.log(
  DOMAIN1.slice(0, DOMAIN1.indexOf(".")) // sadece gmail kimini aldik.
);

//bilgiyi degistir ->replace:
email = email.replace("gmail.com", "hotmail.com");
console.log(email);

//istedigim bilgi var mi?
email.includes("@");//true
email.includes('dkkskdaa')//false

//itedigim bilgiyle basladi mi? bitti mi ->startsWidth, endWitdth:
console.log(
    email.endsWith('hotmail.com')
)
console.log(
    email.endsWith('kodluyoruz.org')
)
// ilk harflerini buyuk yapmak:
let fullName=`${firstName[0].toUpperCase()}${firstName.slice(1)} ${lastName[0].toUpperCase()}${lastName.slice(1)}`
console.log(fullName)