window.onload = function () {
  const form = document.getElementById("form");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    let list = this.document.getElementsByClassName("errors-msg");
    for (let item of list) {
      this.document.getElementById(item.id).innerText = "";
    }

    const formData = new FormData(form);
    console.log(...formData);

    try {
      await validateRegisterForm(formData);
      //send form to server
      console.log("Form is valid.");
    } catch (err) {
      err.forEach((elem) => {
        target = "errors-" + elem.type;
        this.document.getElementById(target).innerText = elem.text;
      });
    }
  });
};
