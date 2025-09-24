// Créez une base de données “utilisateurs” contenant une table “utilisateurs” et ayant
// comme champs “id”, “nom”, “prenom” et “email”.
// Ajoutez des utilisateurs directement dans phpmyadmin.
// Créez une page users.php qui se connecte à la base de données, récupère l’ensemble
// des utilisateurs et affiche ces informations au format json.
// Dans votre page index.php, créez un tableau <table> permettant de contenir ces
// informations ainsi qu’un <button> “update”. Lorsque l’on clique sur ce bouton, le tableau
// doit se mettre à jour et contenir l’ensemble des informations des utilisateurs présents
// dans la base de données.
// Vous pouvez tester votre code en ajoutant/supprimant des utilisateurs à l’aide de
// phpmyadmin entre deux clics.

window.onload = function () {
  const displayTarget = document.getElementById("tbody");
  const rowTemplate = this.document.getElementById("row");
  document.getElementById("update").addEventListener("click", updateTable);
  updateTable();

  function buildAndAppendTableRow(data) {
    let row = rowTemplate.content.cloneNode(true);
    row.getElementById("id").innerText = data["id"];
    row.getElementById("nom").innerText = data["nom"];
    row.getElementById("prenom").innerText = data["prenom"];
    row.getElementById("email").innerText = data["email"];
    displayTarget.append(row);
  }

  async function updateTable() {
    let data = await fetch("users.php");
    let json = await data.json();

    displayTarget.replaceChildren();
    json.forEach((element) => {
      buildAndAppendTableRow(element);
    });
  }
};
