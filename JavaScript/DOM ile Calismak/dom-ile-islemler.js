// 1 *************** DOM içinden öğe seçimi **************
/*
let title = document.getElementById('title')
title.innerHTML="Degisen Bilgi"
console.log(title.innerHTML)


let link=document.querySelector("ul#list>li>a")
link.innerHTML +=" değişti"
link.style.color="red"
link.classList.add ('btn')
console.log(link.innerHTML) */

// 2 ********** prompt ile kullanıcıdan bilgi almak**********
/*
let fullName = prompt("Lütfen adınızı giriniz:");

let greeting = document.querySelector("#greeting");
greeting.innerHTML = `${greeting.innerHTML} <small style="color:red"> ${fullName} </small>`;*/

// 3 ***** list icersisindeki son elemana ulaşamak veya eleman eklemek *****
/*
let lastChild = document.querySelector("ul#list>li:last-child");
lastChild.innerHTML = "son oge degıstı...";

let firstChild = document.querySelector("ul#list>li:first-child");
firstChild.innerHTML = "ilk oge degıstı...";

let ulDOM = document.querySelector("ul#list");
let liDOM = document.createElement("li");
liDOM.innerHTML = "Kendi olusturdugumuz oge";
ulDOM.append(liDOM);// en sona ekler
//YA DA
ulDOM.prepend(liDOM)
*/

// 4 ********** css class eklemek veya cikarmak ************
/*
let greeting=document.querySelector("#greeting")
greeting.classList.add("text-primary")
greeting.classList.add("title")
greeting.classList.add("new-info","second-class","third-class")//birden fazla class eklemek.

greeting.classList.remove("title")//title class'ı silindi
greeting.classList.remove("second-class","third-class")//birden fazla class silinebilir
console.log("#greeting") 
*/