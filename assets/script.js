// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword()
{    var length = prompt("Please designate the length of your password, minimum 8");
    var isNumber = parseInt(length);
    console.log(isNumber);
    if (isNumber >= 8)
        {
    var temp = "";
  for (var i = 0; i < isNumber; i++)
    {
        temp += Math.random().toString(36).slice(2,3);
        }   
    }    
   else
   {
    alert("This isn't a definable answer");
    }
    console.log(temp.length);
    return temp;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
