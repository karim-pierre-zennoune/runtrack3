// Créez un formulaire permettant de trier ces données.
// Il doit contenir les champs suivants :
// ● id (input type text),
// ● nom (input type text),
// ● type (liste déroulante <select>)
// ● filtrer (input type button).
// Lorsque l’on clique sur “filtrer”, le script doit à l’aide de Fetch, récupérer le contenu du
// fichier et lister les éléments répondant aux critères sélectionnés en les affichant sur une
// page HTML.
window.onload = function () {
  if (!"content" in document.createElement("template")) {
    console.log("templating not available on this browser");
  }

  let pokeData = null;
  const cardWrapper = document.getElementById("card-wrapper");
  const pokeTemplate = document.getElementById("poketemplate");

  document.getElementById("filter").addEventListener("click", handleForm);

  function buildAndAppendPkmnNode(pkmn) {
    let card = pokeTemplate.content.cloneNode(true);
    card.getElementById("pkmn-data-id").innerText = pkmn["id"];
    card.getElementById("pkmn-data-name-en").innerText =
      pkmn["name"]["english"];
    card.getElementById("pkmn-data-name-jp").innerText =
      pkmn["name"]["japanese"];
    card.getElementById("pkmn-data-name-cn").innerText =
      pkmn["name"]["chinese"];
    card.getElementById("pkmn-data-name-fr").innerText = pkmn["name"]["french"];
    card.getElementById("pkmn-data-hp").innerText = pkmn["base"]["HP"];
    card.getElementById("pkmn-data-atk").innerText = pkmn["base"]["Attack"];
    card.getElementById("pkmn-data-def").innerText = pkmn["base"]["Defense"];
    card.getElementById("pkmn-data-spatk").innerText =
      pkmn["base"]["Sp. Attack"];
    card.getElementById("pkmn-data-spdef").innerText =
      pkmn["base"]["Sp. Defense"];
    card.getElementById("pkmn-data-speed").innerText = pkmn["base"]["Speed"];
    card.getElementById("pkmn-data-type1").innerText = pkmn["type"][0];
    if (pkmn["type"].length === 2) {
      card.getElementById("pkmn-data-type2").innerText = pkmn["type"][1];
    }

    cardWrapper.append(card);
  }

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

    cardWrapper.replaceChildren();

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

    filtered.forEach((element) => {
      buildAndAppendPkmnNode(element);
    });
  }
};
