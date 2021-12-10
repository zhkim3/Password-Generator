// Assignment Code
var generateBtn = document.querySelector("#generate");
var LowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"] ;
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var special = ["!", "@", "#", "$", "%", "^", "&", "'", "*", "(", ")", "+", ",", "-", ".", "/", "[", "]", ":", ";", "<", ">", "=", "?", "`", "{", "|", "}", "~", "_",]


// Write password to the #password input
// function writePassword() {
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;

  
// }
// Dom
var passwordEl = document.getElementById("password");
var lengthEl = document.getElementById("length");
var uppercaseEl = document.getElementById("uppercase");
var lowercaseEl = document.getElementById("lowercase");
var numbersEl = document.getElementById("numbers");
var specialEl = document.getElementById("special");
var generateEl = document.getElementById("generate");

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

var randomFunc = {
  lower: GetRandomLowerCaseLetter,
  upper: GetRandomUpperCaseLetter,
  number: GetRandomNumber,
  special: GetRandomSpecial
};

generateBtn.addEventListener("click", () => {
  var length = +lengthEl.value;
  var hasLower = lowercaseEl.checked;
  var hasUpper = uppercaseEl.checked;
  var hasNumber = numbersEl.checked;
  var hasSpecial = specialEl.checked;

  
  passwordEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSpecial, length);
});

function generatePassword (lower, upper, number, special, length){
   var generatedPassword = "";

   var typescount = lower + upper + number + special;
   
   var typesArr = [{lower}, {upper}, {number}, {special}].filter
   (
     item => Object.values(item)[0]
   );

   if(typescount === 0) {
     return "";
   }

   for(var i = 0; i < length; i+= typescount) {
    typesArr.forEach(type => {
      var funcName = Object.keys(type)[0];

      generatedPassword += randomFunc[funcName]();
    });
   }
   var FinalPassword = generatedPassword.slice(0, length);
   return FinalPassword;
}


// Generator funtions
function GetRandomLowerCaseLetter() {
 return LowerCase[Math.floor(Math.random() * LowerCase.length)];
}
function GetRandomUpperCaseLetter () {
  return upperCase[Math.floor(Math.random() * upperCase.length)];
}
function GetRandomNumber() {
  return number[Math.floor(Math.random() * number.length)];
}
function GetRandomSpecial () {
  return special[Math.floor(Math.random() * special.length)];
}



