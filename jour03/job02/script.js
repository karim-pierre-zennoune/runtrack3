$(document).ready(function () {
  $(".rainbowshard").on("click", clicRainbow);
});

function shuffle() {
  $("span").html("");
  $(".rainbowshard").off();
  let parent = $("#origin");
  let divs = parent.children();
  let dest = $("#destination");
  let destdivs = dest.children();
  while (destdivs.length) {
    parent.append(
      destdivs.splice(Math.floor(Math.random() * destdivs.length), 1)[0]
    );
  }
  while (divs.length) {
    parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
  }
  $(".rainbowshard").on("click", clicRainbow);
}

function clicRainbow() {
  var dest = $("#destination");
  dest.append($(this));
  $(this).off();
  let checker = dest.children();
  if (checker.length === 6) {
    let bool = true;

    for (let i = 0; i < checker.length; i++) {
      if (i + 1 != checker[i].attributes.id.value) {
        bool = false;
        break;
      }
    }
    if (bool) {
      $("span").html("Vous avez gagné");
      $("span").css("color", "green");
    } else {
      $("span").html("Vous avez perdu");
      $("span").css("color", "red");
    }
  }
}
