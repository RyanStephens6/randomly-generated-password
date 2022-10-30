// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  //Display checkboxes for selecting password traits once button is pressed
  var prompts = document.getElementById("prompts");
  var promptsDisplay = getComputedStyle(prompts).display;
  if (promptsDisplay == "none") {
    prompts.style.display = "inline";
  } else {
    prompts.style.display = "none";
  }


  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
