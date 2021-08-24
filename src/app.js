/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
//--------------------------------Crear carta aleatoria cuando carga la ventana-----------
window.onload = function() {
  //write your code here
  randomCard();
};

//--------------------------------Crear carta aleatoria con botón-----------
let buttonId = document.getElementById("randomCard");
buttonId.addEventListener("click", randomCard);

//--------------------------------Función carta aleatoria-----------
function randomCard() {
  let icons = ["heart text-danger", "gem", "spa", "crown"];
  let randomIcon = Math.floor(Math.random() * icons.length);
  let randomNumber = Math.floor(Math.random() * 14);
  let iconParent = document.querySelectorAll(".icon");
  if (randomNumber == 0) {
    while (randomNumber == 0) {
      randomNumber = Math.floor(Math.random() * 14);
    }
  } else if (randomNumber == 1) {
    randomNumber = "A";
  } else if (randomNumber == 11) {
    randomNumber = "J";
  } else if (randomNumber == 12) {
    randomNumber = "Q";
  } else if (randomNumber == 13) {
    randomNumber = "K";
  }

  document.querySelector(".number").innerHTML = `<span>${randomNumber}</span>`;
  iconParent[0].innerHTML = `<i class="fas fa-${icons[randomIcon]}"></i>`;
  iconParent[1].innerHTML = `<i class="fas fa-${icons[randomIcon]}"></i>`;
}
