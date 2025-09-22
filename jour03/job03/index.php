<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8" />
    <title>Javascript</title>
    <link rel="stylesheet" href="./style.css" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <script src="script.js"></script>
</head>

<body>
    <div id="gameboard">

        <img class="tile" src="./img/tile1.png" id="1" alt="tile1" />
        <img class="tile" src="./img/tile2.png" id="2" alt="tile2" />
        <img class="tile" src="./img/tile3.png" id="3" alt="tile3" />
        <img class="tile" src="./img/tile4.png" id="4" alt="tile4" />
        <img class="tile" src="./img/tile5.png" id="5" alt="tile5" />
        <img class="tile" src="./img/tile6.png" id="6" alt="tile6" />
        <img class="tile" src="./img/tile7.png" id="7" alt="tile7" />
        <img class="tile" src="./img/tile8.png" id="8" alt="tile8" />
        <img class="tile" src="./img/white.jpg" id="9" alt="empty">

    </div>
    <button id="gamebutton" onclick="shuffle()">Start Game</button>
    <p id="message"></p>

</body>

</html>