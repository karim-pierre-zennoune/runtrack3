"use strict";

// Créez une fonction “tri” qui prend en paramètres un tableau de nombres nommé
// “numbers” et une variable “order” qui contient “asc” ou “desc”. A l’aide de la fonction
// sort() d’un algorithme développé par vos soins, cette fonction doit trier le tableau dans
// l’ordre ascendant ou décroissant, selon le paramètre passé, puis retourner le tableau.

function compare_asc(a, b) {
  return a - b;
}

function compare_desc(a, b) {
  return b - a;
}

function tri(numbers, order) {
  if (order === "asc") {
    numbers.sort(compare_asc);
  } else {
    numbers.sort(compare_desc);
  }
  return numbers;
}

console.log(tri([6, 7, 60, 65, 43, 7563, 2, 3, 4], "asc"));
console.log(tri([6, 7, 60, 65, 43, 7563, 2, 3, 4], "desc"));
