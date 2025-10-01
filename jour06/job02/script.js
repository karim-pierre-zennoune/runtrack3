window.onload = function () {
  let code = ["D", "G", "C"];
  let step = 0;
  let dgcModal = new bootstrap.Modal(document.getElementById("dgc-modal"));

  document.body.onkeydown = keylog;
  let btn = this.document.getElementById("btn-reboot");
  btn.addEventListener("click", randomQuote);
  this.document.getElementById("menulist").addEventListener("click", setActive);
  this.document
    .getElementById("form-bottom-right")
    .addEventListener("submit", handleForm);
  this.document
    .getElementById("progress-bar-less")
    .addEventListener("click", progressLess);
  this.document
    .getElementById("progress-bar-more")
    .addEventListener("click", progressMore);
  this.document
    .getElementById("pagination")
    .addEventListener("click", paginate);

  function keylog(event) {
    if (code[step] == event.key) {
      step++;
    } else {
      step = 0;
    }
    if (step === 3) {
      step = 0;
      dgcEvent();
    }
  }

  function dgcEvent() {
    if (
      !bootstrap.Modal.getInstance(document.getElementById("dgc-modal"))
        ._isShown
    ) {
      let form = document.getElementById("form-bottom-left");
      let fields = ["Login", "Mot de Passe", "DogeCoin", "berlusconimkt"];
      let target = document.getElementById("dgc-modal-text");
      target.innerHTML = "";
      let i = 0;

      while (fields[i]) {
        let p = document.createElement("p");
        p.innerText = fields[i] + ": " + form[i].value;
        target.append(p);
        i++;
      }
      dgcModal.show();
    }
  }

  async function randomQuote() {
    let data = await fetch("quotes.json");
    let json = await data.json();
    let quote = json[Math.floor(Math.random() * json.length)];
    let p = document.createElement("p");
    p.innerText = quote;
    let target = document.getElementById("quote-target");
    target.innerHTML = "";
    target.append(p);
  }

  function setActive(event) {
    console.log(event.target.tagName);
    if (event.target.tagName != "LI") return;
    let parent = document.getElementById("menulist");
    for (const child of parent.children) {
      child.classList.remove("active");
    }
    event.target.classList.add("active");
  }

  function paginate(event) {
    console.log(event.target.text);
    if (event.target.tagName != "A") return;
    if (event.target.text === "1") return;

    let p = document.createElement("p");
    p.innerText =
      "La pagination doit modifier le contenu du jumbotron par un contenu devotre choix.";
    let target = document.getElementById("quote-target");
    target.innerHTML = "";
    target.append(p);
  }

  function progressLess() {
    let target = document.getElementById("progress-bar");
    let value = parseInt(target.style.width);
    value -= 5;
    if (value < 0) value = 0;
    target.style.width = value + "%";
  }

  function progressMore() {
    let target = document.getElementById("progress-bar");
    let value = parseInt(target.style.width);
    value += 5;
    if (value > 100) value = 100;
    target.style.width = value + "%";
  }

  function handleForm(event) {
    let colors = [
      "text-primary",
      "text-secondary",
      "text-success",
      "text-info",
      "text-warning",
      "text-danger",
      "text-light",
      "text-dark",
    ];
    event.preventDefault();
    let form = document.getElementById("form-bottom-right");
    if (form[0].value !== "" && form[1].value !== "") {
      let spinner = document.getElementById("spinner");
      spinner.classList.remove(spinner.classList[1]);
      spinner.classList.add(colors[Math.floor(Math.random() * colors.length)]);
    }
  }
};
