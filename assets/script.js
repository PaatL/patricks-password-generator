// Assignment Code

var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {

  var password = generatePassword();

}   function generatePassword(length, uppercase, lowercase, numbers, special) {
  let charset = '';
  if (uppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (lowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
  if (numbers) charset += '0123456789';
  if (special) charset += '!@#$%^&*()-_+=[]{}|;:,.<>?';
  let password = '';
  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", function() {
  let length = parseInt(prompt('Enter the length of the password (between 8 and 50 characters):', '8'));
  if (isNaN(length) || length < 8 || length> 50) {
    alert('Invalid password length. Please enter a number between 8 and 50.');
  } else {
    // Confirm which character types to include
    let uppercase = confirm('Include uppercase letters?');
    let lowercase = confirm('Include lowercase letters?');
    let numbers = confirm('Include numbers?');
    let special = confirm('Include special characters?');
  
    if (!uppercase && !lowercase && !numbers && !special) {
      alert('Please select at least one option.');
    } else {
      let password = generatePassword(length, uppercase, lowercase, numbers, special);
      
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
    }}
});

