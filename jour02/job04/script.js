"use strict";
// Créez un <textarea> dont l’id est “keylogger”.
// Chaque fois que l’utilisateur tape une lettre sur son clavier (a-z), celle-ci est ajoutée
// dans le textarea (même si le focus en cours n’est pas le textarea).
// Si le focus en cours est dans le textarea, la lettre doit être ajoutée deux fois.

window.onload = function () {
  document.body.onkeydown = keylog;
};

function keylog(event) {
  if (!(event.key >= "a" && event.key <= "z")) {
    return;
  }
  document.getElementById("keylogger").value += event.key;
}
