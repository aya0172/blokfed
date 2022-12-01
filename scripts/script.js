// JavaScript Document
console.log("hi");

var eersteImagesButton = document.querySelector("header nav li:nth-of-type(4) button");


eersteImagesButton.addEventListener("click", eersteImagesButtonKlik);

function eersteImagesButtonKlik() {

  eersteImagesButton.classList.toggle("menuOpen");
}