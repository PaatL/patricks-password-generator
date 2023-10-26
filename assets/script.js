// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialCharList = "!@#$%&*".split("");;
var capitalList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var lowerCaseList = "abcdefghijklmnopqrstuvwxyz".split("");
var numberList = "0123456789".split("");

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword()
{  //prompt to ask about length
      var length = prompt("Please designate the length of your password, minimum 8, maximum 128 characters");
    //parse to make it into an integer, also serves as a check if its an actionable value i.e. an actual number
      var isNumber = parseInt(length);


    //console.log(isNumber);
    //checks if value is greater or equal to 8
    if (isNumber >= 8)
        {
          var allowCapitals = confirm("Do you want to use capital letters in your password?")
        
            var allowLowerCase = confirm("Do you want to use lower case letters in your password?")
         
            var allowSpecials = confirm("Do you want to use special characters in your password?")
          
            var allowNumbers = confirm("Do you want to use numbers in your password?")
        } else
        { //alert to show the user that they didn't give an appropriate response
         alert("This isn't a definable answer");
         }
        

    console.log(isNumber);
    //checks if value is greater or equal to 8
    if (isNumber >= 8)
        {
          let allowCapitals = confirm("Do you want to use capital letters in your password?")
        
            let allowLowerCase = confirm("Do you want to use lower case letters in your password?")
         
            let allowSpecials = confirm("Do you want to use special characters in your password?")
          
            let allowNumbers = confirm("Do you want to use numbers in your password?")
            
            
if(!allowCapitals && !allowLowerCase && !allowNumbers && !allowSpecials)
{
  alert("You need at least one password criteria")
}
else

    var temp = "";
  var numberReached = false;
  console.log(numberReached);
   while(!numberReached) {
    if (allowCapitals)
    {
      var capitalValue = randomElement(capitalList);
      temp += capitalValue;
    }
    if (allowLowerCase)
    { var lowerCaseValue = randomElement(lowerCaseList);
      temp += lowerCaseValue;

    }
    
    if (allowNumbers)
    { var numberValue = randomElement(numberList);
      temp += numberValue;

    }
    
    if (allowSpecials)
    {
      var specialValue = randomElement(specialCharList);
      temp += specialValue;
    }
console.log(temp.length);
   if(temp.length === isNumber) {numberReached = true;}
  }
  return temp;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function randomElement(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length)
  var randomElement = arr[randomIndex];
  return randomElement;
}
=======
console.log(allowCapitals,allowLowerCase,allowNumbers,allowSpecials);
    var finalList =[""];
    var temp = "";
    var expr = true;
   
    if (allowCapitals = true)
    {
finalList += capitalList;
console.log(finalList);
    }
    if (allowLowerCase = true)
    {
finalList.concat(finalList,lowerCaseList);

    }
    
    if (allowNumbers = true)
    {
      finalList.concat(finalList,numberList);

    }
    
    if (allowSpecials = true)
    {

      finalList.concat(finalList,specialCharList);
    }
    console.log(finalList);

    for(var i = 0 ; i < isNumber; i++)
    {
      temp += finalList[Math.floor(Math.random() *finalList.length)];
    }
  }
   else
   { //alert to show the user that they didn't give an appropriate response
    alert("This isn't a definable answer");
    }
    console.log(temp);
    return temp;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
