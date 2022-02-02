// ************* Template Literals Kullanimi ************
let username="hakan"
const DOMAIN= "kodluyoruz.org"

let email =username+"@"+DOMAIN
console.log("Merhaba",username,"sitemize hoşgeldin","mail adresin:",email)

let info =`Merhaba ${username} sitemize hoşgeldin.. mail adresin: ${email}
mail adresinin uzunlugu: ${email.length}
borcunuz: ${(2+3)*100} tl
gunun saat bilgisi: ${new Date().getHours()}
`
console.log(info)