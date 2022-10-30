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
  var password = "";
  for (let i = 0; i < passwordLength; i++){
    //Generates a password if all character types are selected
    if (lowerCase && upperCase && numeric && special) {
      switch (Math.floor(Math.random() *4)) {
        case 0:
          password += getRandomLower();
          continue;
        case 1:
          password += getRandomUpper();
          continue;
        case 2:
          password += getRandomNumber();
          continue;
        case 3:
          password += getRandomSpecial();
          continue;
      }
    }
    //Generates a password if all character types but special are selected
    else if (lowerCase && upperCase && numeric) {
      switch (Math.floor(Math.random() * 3)) {
        case 0:
          password += getRandomLower();
          continue;
        case 1:
          password += getRandomUpper();
          continue;
        case 2:
          password += getRandomNumber();
          continue;
      }
    }
    //Generates a password if all character types but numeric are selected
    else if (lowerCase && upperCase && special) {
      switch (Math.floor(Math.random() * 3)) {
        case 0:
          password += getRandomLower();
          continue;
        case 1:
          password += getRandomUpper();
          continue;
        case 2:
          password += getRandomSpecial();
          continue;
      }
    }
    //Generates a password if all character types but uppercase are selected
    else if (lowerCase && numeric && special) {
      switch (Math.floor(Math.random() * 3)) {
        case 0:
          password += getRandomLower();
          continue;
        case 1:
          password += getRandomNumber();
          continue;
        case 2:
          password += getRandomSpecial();
          continue;
      }
    }
    //Generates a password if all character types but lowercase are selected
    else if (upperCase && numeric && special) {
      switch (Math.floor(Math.random() * 3)) {
        case 0:
          password += getRandomUpper();
          continue;
        case 1:
          password += getRandomNumber();
          continue;
        case 2:
          password += getRandomSpecial();
          continue;
      }
    }
    //Generates a password if lowercase and uppercase characters are selected
    else if (lowerCase && upperCase) {
      switch (Math.floor(Math.random() * 2)) {
        case 0:
          password += getRandomLower();
          continue;
        case 1:
          password += getRandomUpper();
          continue;
      }
    }
    //Generates a password if lowercase and numeric characters are selected
    else if (lowerCase && numeric) {
      switch (Math.floor(Math.random() * 2)) {
        case 0:
          password += getRandomLower();
          continue;
        case 1:
          password += getRandomNumber();
          continue;
      }
    }
    //Generates a password if lowercase and special characters are selected
    else if (lowerCase && special) {
      switch (Math.floor(Math.random() * 2)) {
        case 0:
          password += getRandomLower();
          continue;
        case 1:
          password += getRandomSpecial();
          continue;
      }
    }
    //Generates a password if uppercase and numeric characters are selected
    else if (upperCase && numeric) {
      switch (Math.floor(Math.random() * 2)) {
        case 0:
          password += getRandomUpper();
          continue;
        case 1:
          password += getRandomNumber();
          continue;
      }
    }
    //Generates a password if uppercase and special characters are selected
    else if (upperCase && special) {
      switch (Math.floor(Math.random() * 2)) {
        case 0:
          password += getRandomUpper();
          continue;
        case 1:
          password += getRandomSpecial();
          continue;
      }
    }
    //Generates a password if numeric and special characters are selected
    else if (numeric && special) {
      switch (Math.floor(Math.random() * 2)) {
        case 0:
          password += getRandomNumber();
          continue;
        case 1:
          password += getRandomSpecial();
          continue;
      }
    }
    //Generates a password if only lowercase is selected
    else if (lowerCase) {
      password += getRandomLower();
      continue;
    }
    //Generates a password if only uppercase is selected
    else if (upperCase) {
      password += getRandomUpper();
      continue;
    }
    //Generates a password if only numeric is selected
    else if (numeric) {
      password += getRandomNumber();
      continue;
    }
    //Generates a password if only special is selected
    else if (special) {
      password += getRandomSpecial();
      continue;
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
