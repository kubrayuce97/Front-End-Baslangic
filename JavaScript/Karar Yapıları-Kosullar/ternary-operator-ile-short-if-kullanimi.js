//eger kullanıcı adın varsa yazdır yoksa kullanıcı bilginiz bulunamadı yaz.

let userName=prompt("Kullanıcı Bilginizi Giriniz:")
let info =document.querySelector("#info")

//ternary kullanimi:
// kosul ? dogruysa :yanlissa
info.innerHTML=`${userName.length>0 ? userName : "Kullanici bilginiz bulunamadi"}`