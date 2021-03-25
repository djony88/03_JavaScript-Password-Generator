var upperCaseOption = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCaseOption = "abcdefghijklmnopqrstuvwxyz";
var specialCaractersOptions = "!@#$%^&*()";
var numbersOtion = "1234567890";

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var upperCase = window.comfirm ("Would you like upper case letters?");
  var specialCaracters = window.comfirm ("Would you like special character letters?");
  var lowerCase = window.confirm ("Would you like lower case letters?");
  var numbers = window.confirm ("Would you like numbers?");
  var passwordLenght = window.prompt ("How many characters would you like your password to be?");




  return
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
