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
        <button id="filter" type="button" onclick="handleForm()">Filtrer</button>



    </form>



    <div class="card-wrapper"></div>


    <div class="pkmn-card">
        <div class="card-left">
            <p>id: 1</p>
            <p>english</p>
            <p>japanese</p>
            <p>chinese</p>
            <p>french</p>

        </div>
        <div class="card-right">

            <table>
                <tr>
                    <th>HP</th>
                    <td>50</td>
                </tr>
                <tr>
                    <th>Atk</th>
                    <td>135</td>
                </tr>
                <tr>
                    <th>Def</th>
                    <td>60</td>
                </tr>
                <tr>
                    <th>Sp.Atk</th>
                    <td>130</td>
                </tr>
                <tr>
                    <th>Sp.Def</th>
                    <td>40</td>
                </tr>
                <tr>
                    <th>Speed</th>
                    <td>70</td>
                </tr>

                <tr>
                    <td>Type1</td>
                    <td>Type2</td>
                </tr>
            </table>


        </div>

    </div>



</body>


</html>




<template id="pkmn">

    <div class="pkmn-card">
        <div class="card-left">
            <p>id: 1</p>
            <p>english</p>
            <p>japanese</p>
            <p>chinese</p>
            <p>french</p>
            <table>
                <tr>
                    <td>Fire</td>
                    <td>Flying</td>
                </tr>
            </table>
        </div>
        <div class="card-right">
            <p>"HP": 45,</p>
            <p>"Attack": 49,</p>
            <p>"Defense": 49,</p>
            <p>"Sp. Attack": 65,</p>
            <p>"Sp. Defense": 65,</p>
            <p>"Speed": 45</p>
        </div>

    </div>
</template>