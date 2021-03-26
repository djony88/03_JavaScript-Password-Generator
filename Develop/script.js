// Assignment Code

// declared array of options for password
var userInput;
var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialCharactersArray = ['@','%', '+', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
var numbersArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];





// Some kind of Function for the adding prompt windows
function passwordOptionSet() {
  var userInput = parseInt(prompt("How many characters would you like your password to be?"));
  var length = number(userInput)
  if (!userInput) {
    alert("Value input required");
    return;
  }
  else if (isNaN(length)) {
    alert("Value must be a number");
    return;
  }
  else if (length < 8 || length > 128) {
    alert("Must be between 8 and 128");
    return;
  } 
  userInput = window.prompt("Chosen number of characters(must be between 8-128)");
  
  var specialCharacters = confirm("Would you like special character letters?");

var upperCase = confirm("Would you like upper case letters?");
var lowerCase = confirm("Would you like lower case letters?");

var numbers = confirm("Would you like numbers?");


// conditional statement to check if user does not include any of these
// === vs ==. The === compare for value and type, == just the type 
if (
  specialCharacters === false &&
  upperCase === false &&
  lowerCase === false &&
  numbers === false
) {
  alert("must select at least one option")
  return;
}

// object to store the user input 
// JSON (javascript object format)

var passwordOptions = {
  length: length,
  specialCharacters: specialCharacters,
  upperCase: upperCase,
  lowerCase: lowerCase,
  numbers: numbers,
}

  return passwordOptions;
}


// Function to generate A RANDOM (math.random) paswword given the criteria 
function randomP() {

}

// Function to print it out properly 

function generatePassword() {
 // need to concatenate all the randomly generated characters
 // you'll store them in variables that are arrays 
  
  
  return
}

var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
