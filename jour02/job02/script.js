"use strict";
// Créez une balise <button> ayant comme id “button”.
// Lorsque l’on clique dessus, un <article> contenant le texte suivant est ajouté au contenu
// de la page : “L'important n'est pas la chute, mais l'atterrissage.”
// Si on clique à nouveau sur ce bouton, l’article disparaît.
// L’apparition / Disparition doivent être gérées dans une fonction nommée “showhide()”.

function show() {
  const newElem = document.createElement("article");
  newElem.setAttribute("id", "article");
  const elemText = document.createTextNode(
    "L'important n'est pas la chute, mais l'atterrissage."
  );
  newElem.appendChild(elemText);
  document.body.appendChild(newElem);
}

function hide() {
  let elem = document.getElementById("article");
  elem.remove();
}

function showhide() {
  let elem = document.getElementById("article");
  if (typeof elem != "undefined" && elem != null) hide();
  else show();
}
