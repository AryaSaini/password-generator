var generateBtn = document.querySelector("#generate");
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
 
  var length = parseInt(prompt("Enter the length of the password (minimum 8, maximum 128):", "8"));

  if (length < 8 || length > 128) {
    alert("Please enter a valid number between 8 and 128.");
    return generatePassword();
  }
  var charset = "";
  var specialCharacters = confirm("Include special character?");
  var numbers = confirm("Include numbers");
  var upperCase = confirm("Include uppercase letter?");
  var lowerCase = confirm("Include lowercase letters?");

  if (!specialCharacters && !numbers && !upperCase && !lowerCase) {
    alert("Nice Try, try again!");
    return generatePassword();
  }

  if (specialCharacters) charset += "!@#$%^&*()_-+=|?/.,:;"
  if (numbers) charset += "0123456789";
  if (upperCase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (lowerCase) charset += "abcdefghijklmnopqrstuvwxyz";

  var password = "";
  for (var i = 0, n = charset.length; i < length; i++) {
    password += charset.charAt(Math.floor(Math.random() * n));
  }
 
  return password;
}
alert("Your password is: " + password);

generateBtn.addEventListener("click", writePassword);
