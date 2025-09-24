<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8" />
    <title>Javascript</title>
    <script src="script.js"></script>
    <link rel="stylesheet" href="./style.css" />
</head>



<body>
    <form name="pokeform" action="" method="get">
        <label for="id">id:</label>
        <input type="text" name="id" id="id">

        <label for="nom">nom:</label>
        <input type="text" name="nom" id="nom">

        <label for="type">type</label>
        <select name="type" id="type">
            <option value="">(none)</option>
            <option value="Grass">Grass</option>
            <option value="Poison">Poison</option>
            <option value="Fire">Fire</option>
            <option value="Flying">Flying</option>
            <option value="Water">Water</option>
            <option value="Bug">Bug</option>
            <option value="Normal">Normal</option>
            <option value="Electric">Electric</option>
            <option value="Ground">Ground</option>
            <option value="Fairy">Fairy</option>
            <option value="Fighting">Fighting</option>
            <option value="Psychic">Psychic</option>
            <option value="Rock">Rock</option>
            <option value="Steel">Steel</option>
            <option value="Ice">Ice</option>
            <option value="Ghost">Ghost</option>
            <option value="Dragon">Dragon</option>
        </select>

        <label for="filter" hidden>Filter</label>
        <button id="filter" type="button">Filtrer</button>



    </form>



    <div id="card-wrapper"></div>







</body>


</html>




<template id="poketemplate">


    <div class="pkmn-card">
        <div class="card-left">
            <p class="text maintext">id:<span id="pkmn-data-id"> </span></p>
            <p class="text subtext">english</p>
            <p class="text maintext" id="pkmn-data-name-en"></p>
            <p class="text subtext">japanese</p>
            <p class="text maintext" id="pkmn-data-name-jp"></p>
            <p class="text subtext">chinese</p>
            <p class="text maintext" id="pkmn-data-name-cn"></p>
            <p class="text subtext">french</p>
            <p class="text maintext" id="pkmn-data-name-fr"></p>
        </div>
        <div class="card-right">
            <table>
                <col />
                <col />
                <tr>
                    <th>HP</th>
                    <td id="pkmn-data-hp"></td>
                </tr>
                <tr>
                    <th>Atk</th>
                    <td id="pkmn-data-atk"></td>
                </tr>
                <tr>
                    <th>Def</th>
                    <td id="pkmn-data-def"></td>
                </tr>
                <tr>
                    <th>Sp.Atk</th>
                    <td id="pkmn-data-spatk"></td>
                </tr>
                <tr>
                    <th>Sp.Def</th>
                    <td id="pkmn-data-spdef"></td>
                </tr>
                <tr>
                    <th>Speed</th>
                    <td id="pkmn-data-speed"></td>
                </tr>
            </table>
            <div class="types">
                <div id="pkmn-data-type1"></div>
                <div id="pkmn-data-type2"></div>
            </div>
        </div>
    </div>



</template>