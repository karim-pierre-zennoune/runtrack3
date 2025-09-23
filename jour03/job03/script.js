function shuffle() {
  $("#message").html("");
  $(".tile").off();
  let board = $("#gameboard");
  let tiles = board.children();
  while (tiles.length) {
    board.append(tiles.splice(Math.floor(Math.random() * tiles.length), 1)[0]);
  }

  let data = [];
  board = $("#gameboard");
  tiles = board.children();

  for (let i = 0; i < tiles.length; i++) {
    data.push(tiles[i].attributes.id.value);
  }

  if (!isSolvable(data)) {
    console.log("not solvable, reshuffling:" + data);
    shuffle();
  } else {
    $(".tile").on("click", clicTile);
    console.log("new board available: " + data);
  }
}

function isSolvable(arr) {
  let swapped;
  let count = 0;

  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        count++;
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);

  return count % 2 === 0;
}

function isSolved() {
  board = $("#gameboard");
  tiles = board.children();

  for (let i = 0; i < tiles.length; i++) {
    if (i + 1 != tiles[i].attributes.id.value) {
      return false;
    }
  }
  return true;
}

function clicTile() {
  let id = $(this)[0].attributes.id.value;
  let blank;

  if (id == 9) return;

  let data = [];
  board = $("#gameboard");
  tiles = board.children();

  for (let i = 0; i < tiles.length; i++) {
    if (tiles[i].attributes.id.value == 9) {
      blank = tiles[i];
    }
    data.push(tiles[i].attributes.id.value);
  }

  let index_of_clic = data.indexOf(id);
  let index_of_empty = data.indexOf("9");

  console.log("clic: " + index_of_clic + " empty: " + index_of_empty);

  if (
    (index_of_clic <= 5 && index_of_clic + 3 === index_of_empty) ||
    (index_of_clic >= 2 && index_of_clic - 3 === index_of_empty) ||
    (index_of_clic % 3 <= 1 && index_of_clic + 1 === index_of_empty) ||
    (index_of_clic % 3 >= 1 && index_of_clic - 1 === index_of_empty)
  ) {
    tileSwap(blank, this);
  } else {
    console.log("not a valid move");
  }

  if (isSolved()) {
    $("#message").html("Vous avez gagné");
    $(".tile").off();
  }
}

function tileSwap(a, b) {
  a = $(a);
  b = $(b);
  var tmp = $("<span>").hide();
  a.before(tmp);
  b.before(a);
  tmp.replaceWith(b);
}
