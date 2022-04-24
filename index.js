const dataLowercase = "azertyuiopmlkjhgfdsqwxcvbn";
const dataUppercase = dataLowercase.toUpperCase();
const dataNumbers = "0123456789";
const dataSpecial = "!@#$%^&*";

passwordSelected = document.getElementById("password-selected");

lowercase = document.getElementById("lowercase-check");
uppercase = document.getElementById("uppercase-check");
numbers = document.getElementById("number-check");
specials = document.getElementById("special-check");

displayPasswordLength = document.getElementById("display-password-length");

passwordOutput = document.getElementById("password-output");

const generatePassword = () => {
  let data = [];
  let password = "";

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

  
  let chars = password.split(/(\d+)|(\W+)/).join("");


  let splitResult = "";
  

  for (i = 0; i < chars.length; i++) {
    if (isNaN(chars[i]) === false) {
      splitResult += `<span class="number-color">${chars[i]}</span>`;
    } else if(chars[i].match(/(\W+)/) !== null){
      splitResult += `<span class="special-color">${chars[i]}</span>`;
    }else{
      splitResult += `<span class="string-color">${chars[i]}</span>`;
    }
  }

  document.getElementById("password-result").innerHTML = splitResult;
  console.log(splitResult);
};

btn.addEventListener("click", () => {
  generatePassword();
});
