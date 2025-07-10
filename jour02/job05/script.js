"use strict";
// Créez un fichier style.css. Définissez la taille minimale de votre body à 4096px.
// Ajoutez un <footer> qui prend toute la largeur de votre page en position : fixed en bas
// de votre fenêtre.
// De la même façon qu’une barre de chargement, la couleur du footer doit évoluer en
// fonction du pourcentage de scrolling.

window.onload = function () {
  document.body.onscroll = scroll_check;
};

function scroll_check() {
  let position =
    document.documentElement.scrollTop /
    (document.documentElement.scrollHeight -
      document.documentElement.clientHeight);

  let newcolor = position * 255;
  let elem = document.getElementsByTagName("footer")[0];
  elem.style.backgroundColor = `rgb(0, 0, ${newcolor})`;
}
