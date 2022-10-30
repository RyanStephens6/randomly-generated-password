// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //Asks for users desired password length
  let passwordLength = prompt("Please enter the number of characters you wish your password to be. (8-24)");
  //Resets function if password length is not 8-24
  if (passwordLength < 8 || passwordLength > 24) {
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
  let characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()"
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
