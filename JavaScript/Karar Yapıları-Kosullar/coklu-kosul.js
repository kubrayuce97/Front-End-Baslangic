let userName = prompt("Kullanıcı Adınız:");
let age = prompt("Yaşınız:");

if (userName && age >= 18) {
  console.log("Ehliyet alabilirsiniz.");
} else if (!userName) {
  console.log("Kullanıcı adınız yok");
} else if (!(age >= 18)) {
  console.log("18 yaşından küçüksünüz veya yaş bilginiz yok.");
}

let info = document.querySelector("#info");

if (userName && age >= 18) {
  info.innerHTML = "Ehliyet alabilirsiniz.";
} else if (!userName) {
  info.innerHTML = "Kullanıcı adınız yok";
} else if (!(age >= 18)) {
  info.innerHTML = "18 yaşından küçüksünüz veya yaş bilginiz yok.";
}

