// JavaScript Document
console.log("hi");

var barSearch = document.querySelector("header nav li:nth-of-type(3) input");
var iconSearch = document.querySelector("header nav li:nth-of-type(3) img");



function buttonKlik() {

  barSearch.classList.toggle("opensearch");
}

iconSearch.addEventListener("click", buttonKlik);

// Veranderen van vergootglas naar kruis
var kruisButton = document.querySelector("header nav ul li:nth-of-type(3) button");

kruisButton.addEventListener("click", veranderKruis);

function veranderKruis() {
  kruisButton.classList.toggle("balkopen");
}

// Verander hamburger menu naar kruis

var kruisButtonvoormenu = document.querySelector("header nav ul li:nth-of-type(4) button");

kruisButtonvoormenu.addEventListener("click", veranderKruisvoormenu);

function veranderKruisvoormenu() {
  kruisButtonvoormenu.classList.toggle("balkopen");
}


//***MISLUKTE HAMBURGERMENU */
// // functie menu
// var iconMenu = document.querySelector("header nav li:nth-of-type(4) img");
// var menuOpen = document.querySelector("header nav ul li:last-of-type ul")

// function openMenubalk(){
//   menuOpen.classList.toggle("openmaken");
// }

// iconMenu.addEventListener("click", openMenubalk);

// // // Hamburger menu // 
// var openButton = document.querySelector("header > nav > ul > li:last-of-type > button");
// openButton.addEventListener("click", openMenu);
// function openMenu(){
//     var deNav = document.querySelector("header nav ul li:last-of-type ul");
//     deNav.classList.add("toonMenu");
// }

// //sluit menu
// var sluitButton = document.querySelector("header > nav > ul > li:last-of-type > button");
// sluitButton.addEventListener("click", sluitMenu);
// function sluitMenu(){
//   var deNav = document.querySelector("header nav ul li:last-of-type ul");
//   deNav.classList.remove("toonMenu");
// }





