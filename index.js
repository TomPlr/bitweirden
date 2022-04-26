const dataLowercase = "azertyuiopmlkjhgfdsqwxcvbn";
const dataUppercase = dataLowercase.toUpperCase();
const dataNumbers = "0123456789";
const dataSpecial = "!@#$%^&*";

let passwordCopy = "";

passwordSelected = document.getElementById("password-selected");
lowercase = document.getElementById("lowercase-check");
uppercase = document.getElementById("uppercase-check");
numbers = document.getElementById("number-check");
specials = document.getElementById("special-check");
displayPasswordLength = document.getElementById("display-password-length");

const generatePassword = () => {
  let data = [];
  let password = "";
  let splitResult = "";

  if (lowercase.checked) data.push(...dataLowercase);
  if (uppercase.checked) data.push(...dataUppercase);
  if (numbers.checked) data.push(...dataNumbers);
  if (specials.checked) data.push(...dataSpecial);

  if (data.length === 0) {
    alert("Veuillez sélectionner des critères !");
    return;
  }

  if (passwordSelected.checked === false) {
    alert("Veuillez sélectionner un type de mot de passe !");
    return;
  }

  for (i = 0; i < displayPasswordLength.value; i++) {
    password += data[Math.floor(Math.random() * data.length)];
  }

  passwordCopy = password;

  for (i = 0; i < password.length; i++) {
    if (isNaN(password[i]) === false) {
      splitResult += `<span class="number-color">${password[i]}</span>`;
    } else if (password[i].match(/(\w+)/) === null) {
      splitResult += `<span class="special-color">${password[i]}</span>`;
    } else {
      splitResult += `<span class="string-color">${password[i]}</span>`;
    }
  }

  document.getElementById("password-result").innerHTML = splitResult;
};

btnPwd.addEventListener("click", () => {
  generatePassword();
});

btnCopy.addEventListener("click", () => {
  navigator.clipboard.writeText(passwordCopy);
  btnCopy.textContent = "Copied !";
  setTimeout(() => {
    btnCopy.textContent = "Copy Password";
  }, 2000);
});
