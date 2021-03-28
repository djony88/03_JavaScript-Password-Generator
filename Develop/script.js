// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialCharactersArray = ["!", "@", "#", "$", "^", "&", "*", "(", ")", "-", "_", "=", "+"];
var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbersArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var userInput;
var inputSpecialCharacter;
var inputUpperCase;
var inputLowerCase;
var inputNumber;

// Some kind of Function for the adding prompt windows
function generatePassword(){
  userInput = window.prompt("Choose password length (Must be 8 - 128 characters!)");
  var length = Number(userInput)
  if (!userInput) {
    alert("Input value requred!");
    return;
  } else if (isNaN(length)) {
    alert("Input must be a number");
    return;
  } else if (length < 8 || length > 128) {
    alert("Must be between 8 and 128 characters");
    return;
}
else if (length >= 8 && length <= 128) {
  inputSpecialCharacter = window.confirm("Would you like special character?");
  inputUpperCase = window.confirm("Would you like upper case letters?");
  inputLowerCase = window.confirm("Would you like lower case letters?");
  inputNumber = window.confirm("Would you like numbers?");

  if (!inputSpecialCharacter && !inputUpperCase && !inputLowerCase && !inputNumber) {
    alert("At least one input is required!");
    return;
  }
}

var userChoice = []
if (inputSpecialCharacter) {
  userChoice = userChoice.concat(specialCharactersArray);
}
if (inputUpperCase) {
  userChoice = userChoice.concat(upperCaseArray);
}
if (inputLowerCase) {
  userChoice = userChoice.concat(lowerCaseArray);
}
if (inputNumber) {
  userChoice = userChoice.concat(numbersArray);
}
var newPassword = [];
for (var i = 0; i < length; i++) {
  newPassword.push(userChoice[Math.floor(Math.random() * userChoice.length)]);
}
return newPassword.join('');

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);