$(document).ready(function () {
  $(".rainbowshard").on("click", function () {
    console.log("clic");
    var dest = $("#destination");
    dest.append($(this));
    $(this).off();
    //
    let checker = dest.children();
    if (checker.length === 6) {
      console.log("time to check");

      for (let i = 1; i <= checker.length; i++) {
        if (i != checker[i].id) {
          console.log("check OK");
        }
      }
    }
  });
});

function shuffle() {
  var parent = $("#origin");
  var divs = parent.children();
  while (divs.length) {
    parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
  }
}
