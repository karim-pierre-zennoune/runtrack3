<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8" />
    <title>Javascript</title>
    <script src="script.js"></script>
    <link rel="stylesheet" href="./style.css" />
</head>



<body>

    <button id="update">UPDATE</button>

    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>NOM</th>
                <th>PRENOM</th>
                <th>EMAIL</th>
            </tr>
        </thead>
        <tbody id="tbody"></tbody>

    </table>


</body>


</html>


<template id="row">
    <tr>
        <td id="id"></td>
        <td id="nom"></td>
        <td id="prenom"></td>
        <td id="email"></td>
    </tr>
</template>