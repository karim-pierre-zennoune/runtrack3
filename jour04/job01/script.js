// Créez un <button> ayant comme id “button”. Créez un fichier expression.txt contenant
// votre expression favorite.
// Lorsqu’un utilisateur clique sur le bouton, à l’aide de Fetch, récupérez le contenu du
// fichier expression.txt, placez le dans un paragraphe <p> et insérez le dans le corps de
// votre page.

async function getText(file) {
  let x = await fetch(file);
  let text = await x.text();
  let elem = document.createElement("p");
  let content = document.createTextNode(text);
  elem.appendChild(content);
  button.insertAdjacentElement("afterend", elem);
}
