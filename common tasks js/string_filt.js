const string = "Привет! Как дела?";

function getVowels(str) {
    var string2 = "";
    for(var i = 0; i < str.length; i++) { 
        if(str[i] === "и" || str[i] === "е" || 
        str[i] === "а") { 
        string2 += (str[i]); 
        }
     }
   return string2; 
   }

console.log(getVowels(string));