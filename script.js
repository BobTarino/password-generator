
// Create arrays for characters password will contain 
var lowercaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharacters = ["!","#","$","%","&","(",")","*","+","-",".","/",":",";","<","=",">","?","@","[","\",","{","|","}","~"];

var genCharacters = [];

//Taking the inputs from user. Take potential characters pushing characters into array. 
function generatePassword() {
  var pwLength = prompt("How many characters do you want in your password? (Choose between 8 and 128 characters!)")
  // console.log(pwLength)

  if (pwLength < 8 || pwLength > 128 || isNaN(pwLength) === true) {
    alert("Please enter a password between 8 and 128 characters")
    return;
  } else {
    lower = confirm("Do you want password to contain lowercase characters?");
    upper = confirm("Do you want password to contain UPPERCASE characters?");
    numeric = confirm("Do you want password to contain numbers?");
    special = confirm("Do you want password to contain special characters (e.g. !, #, %)?");
  }



  if (lower) {
    genCharacters = genCharacters.concat(lowercaseCharacters)
  }

  if (upper) {
    genCharacters = genCharacters.concat(uppercaseCharacters)

  }

  if (numeric) {
    genCharacters = genCharacters.concat(numericCharacters)
  }

  if (special) {
    genCharacters = genCharacters.concat(specialCharacters)
  }

  // console.log(genCharacters);

  // empty array for characters to be pushed to

  var passwordArray = [];


  // Loop to generate the password with the correct variable and length 
  for (var i = 0; i < pwLength; i++) {
    var pwResult = genCharacters[Math.floor(Math.random() * genCharacters.length)];
    passwordArray.push(pwResult);
  }
  
  // joins password array and coverts into a string
  return passwordArray.join("");

}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
