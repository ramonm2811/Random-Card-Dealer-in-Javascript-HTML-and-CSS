/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let icons = ["heart text-danger", "gem", "spa", "crown"];
  let randomIcon = Math.floor(Math.random() * icons.length);
  let randomNumber = Math.floor(Math.random() * 10);
  let iconParent = document.querySelectorAll(".icon");
  document.querySelector(".number").innerHTML = `<span>${randomNumber}</span>`;

  iconParent[0].innerHTML = `<i class="fas fa-${icons[randomIcon]}"></i>`;
  iconParent[1].innerHTML = `<i class="fas fa-${icons[randomIcon]}"></i>`;
};
