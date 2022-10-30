// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //Asks for users desired password length
  let passwordLength = prompt("Please enter the number of characters you wish your password to be. (8-128)");
  //Resets function if password length is not 8-128
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a valid password length.")
    return;
  }

  //Asks user if they want lowercase, uppercase, numeric, and/or special characters
  let lowerCase = confirm("Do you want your password to contain lowercase characters?");
  let upperCase = confirm("Do you want your password to contain uppercase characters?");
  let numeric = confirm("Do you want your password to contain numbers?");
  let special = confirm("Do you want your password to contain special characters? (i.e. @ or &");

  //Resets function if no character type is selected
  if (lowerCase == false && upperCase == false && numeric == false && special == false) {
    alert("Please select at least one character type.");
    return;
  }

  //Passes user selections into password generator
  var password = generatePassword(passwordLength, lowerCase, upperCase, numeric, special);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword(passwordLength, lowerCase, upperCase, numeric, special) {
  var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
  var password = "";

  //Generates random password if all character types are selected
  if(lowerCase && upperCase && numeric && special) {
    for (var i = 0; i < passwordLength; i++) {
      password += characters.charAt(Math.floor(Math.random() *72));
    }
  }
  //Generates random password if all character type but special are selected
  else if (lowerCase && upperCase && numeric) {
    for (var i = 0; i < passwordLength; i++) {
      password += characters.charAt(Math.floor(Math.random() *62));
    }
  }
  //generates random password if all character types but numeric are selected
  else if (lowerCase && upperCase && special) {
    for (var i = 0; i < passwordLength; i++) {
      let randomNumber = (Math.floor(Math.random() *72));
      if (randomNumber >= 52 && randomNumber <= 61) {
        i--;
        continue;
      }
      else {
        password += characters.charAt(randomNumber);
      }
    }
  }
  //Generates random password if all character types but uppercase are selected
  else if (lowerCase && numeric && special) {
    for (var i = 0; i < passwordLength; i++) {
      let randomNumber = (Math.floor(Math.random() *72));
      if (randomNumber >= 26 && randomNumber <= 51) {
        i--;
        continue;
      }
      else {
        password += characters.charAt(randomNumber);
      }
    }
  }
  return password;
}

//Return a random lowercase letter
function getRandomLower() {
  var characters = "abcdefghijklmnopqrstuvwxyz";
  return characters.charAt(Math.floor(Math.random() *26));
}

//Return a random uppercase letter
function getRandomUpper() {
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return characters.charAt(Math.floor(Math.random() *26));
}

//Return a random number
function getRandomNumber() {
  return Math.floor(Math.random() *10);
}

//Return a random special character
function getRandomSpecial() {
  var characters = "!@#$%^&*()`~-_=+<>?";
  return characters.charAt(Math.floor(Math.random() * 18));
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
