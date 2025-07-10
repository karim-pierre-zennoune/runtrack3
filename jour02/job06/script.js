"use strict";
// Par défaut, votre index.php n’a pas de contenu.
// Lorsqu’un utilisateur effectue un code konami, la page devient stylisée, aux couleurs de
// La Plateforme_.

let code = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];
let step = 0;

window.onload = function () {
  document.body.onkeydown = keylog;
};

function keylog(event) {
  console.log(event.key);
  if (code[step] == event.key) {
    step++;
  } else {
    step = 0;
  }

  if (step === 10) konami();
}

function konami() {
  let elem = document.getElementsByTagName("body")[0];
  elem.style.backgroundColor = `rgb(0, 98, 255)`;
}
