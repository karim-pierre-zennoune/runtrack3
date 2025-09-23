// Créez un formulaire permettant de trier ces données.
// Il doit contenir les champs suivants :
// ● id (input type text),
// ● nom (input type text),
// ● type (liste déroulante <select>)
// ● filtrer (input type button).
// Lorsque l’on clique sur “filtrer”, le script doit à l’aide de Fetch, récupérer le contenu du
// fichier et lister les éléments répondant aux critères sélectionnés en les affichant sur une
// page HTML.

let pokeData = null;

async function fetchPokeData() {
  let data = await fetch("pokemon.json");
  let json = await data.json();
  return json;
}

async function handleForm() {
  if (pokeData === null) {
    pokeData = await fetchPokeData();
  }

  let pokeForm = document.forms.pokeform;
  let id = pokeForm.elements.id.value;
  let name = pokeForm.elements.nom.value;
  let type = pokeForm.elements.type.value;
  let filtered = pokeData;

  if (id !== "") {
    id = parseInt(id);
    filtered = filtered.filter(function (cur) {
      return cur.id === id;
    });
  }

  name = name.trim();
  if (name !== "") {
    filtered = filtered.filter(function (cur) {
      return (
        cur.name.french.toLowerCase().includes(name.toLowerCase()) ||
        cur.name.english.toLowerCase().includes(name.toLowerCase()) ||
        cur.name.japanese.includes(name) ||
        cur.name.chinese.includes(name)
      );
    });
  }

  if (type !== "") {
    filtered = filtered.filter(function (cur) {
      return cur.type.includes(type);
    });
  }

  console.log(filtered);
}
