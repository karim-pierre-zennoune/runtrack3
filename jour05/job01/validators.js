class FormError {
  constructor(type, text) {
    this.type = type;
    this.text = text;
  }
}

async function validateAddress(str) {
  return new Promise((resolve, reject) => {
    resolve();
  });
}

async function validateZipcode(str) {
  let zipFormat = /^[0-9]+$/;

  return new Promise((resolve, reject) => {
    if (zipFormat.test(str)) {
      resolve();
    } else {
      reject(new FormError("zipcode", "Zipcode can only contain numbers"));
    }
  });
}

async function validatePassword(pw) {
  return new Promise((resolve, reject) => {
    if (
      pw.length > 8 &&
      /\d/.test(pw) &&
      /[A-Za-z]/.test(pw) &&
      /[!@#$%^&*()\-+={}[\]:;"'<>,.?\/|\\]/.test(pw)
    ) {
      resolve();
    } else {
      reject(
        new FormError(
          "password",
          "Minimum 8 character, one letter, one number, one special char"
        )
      );
    }
  });
}

async function validatePrenom(name) {
  return new Promise((resolve, reject) => {
    if (name.length <= 2) {
      reject(
        new FormError("prenom", "La taille de votre prenom est trop petite")
      );
    } else {
      resolve();
    }
  });
}

async function validateName(name) {
  return new Promise((resolve, reject) => {
    if (name.length <= 2) {
      reject(new FormError("nom", "La taille de votre nom est trop petite"));
    } else {
      resolve();
    }
  });
}

async function validateEmail(email) {
  let mailFormat =
    /^(?:[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

  return new Promise((resolve, reject) => {
    if (mailFormat.test(email)) {
      resolve();
    } else {
      reject(new FormError("email", "Email is invalid."));
    }
  });
}

async function validateLoginForm(formData) {
  let errors = [];

  try {
    await validateEmail(formData.getAll("email")[0]);
  } catch (e) {
    errors.push(e);
    return Promise.reject(errors);
  }
}

async function validateRegisterForm(formData) {
  let errors = [];

  try {
    await validateName(formData.getAll("nom")[0]);
  } catch (e) {
    errors.push(e);
  }
  try {
    await validatePrenom(formData.getAll("prenom")[0]);
  } catch (e) {
    errors.push(e);
  }

  try {
    await validateEmail(formData.getAll("email")[0]);
  } catch (e) {
    errors.push(e);
  }

  try {
    await validatePassword(formData.getAll("password")[0]);
  } catch (e) {
    errors.push(e);
  }

  try {
    await validateAddress(formData.getAll("address")[0]);
  } catch (e) {
    errors.push(e);
  }

  try {
    await validateZipcode(formData.getAll("zipcode")[0]);
  } catch (e) {
    errors.push(e);
  }

  if (errors.length === 0) {
    return Promise.resolve();
  } else {
    return Promise.reject(errors);
  }
}
