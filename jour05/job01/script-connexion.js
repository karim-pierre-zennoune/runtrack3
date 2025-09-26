window.onload = function () {
  const form = document.getElementById("form");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    try {
      await validateLoginForm(formData);
      //send form to server
      console.log("Form is valid.");
    } catch (err) {
      err.forEach((elem) => {
        if (elem.type === "email") {
          this.document.getElementById("errors-email").innerText = elem.text;
        }
      });
    }
  });
};
