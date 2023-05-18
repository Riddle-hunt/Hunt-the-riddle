var password = "coin";
var response;
var entryCount = 0;
var entryLimit = Infinity;
var error = false;

while(response != password && !error){
     if(entryCount < entryLimit){
          response = window.prompt("Enter Password");
          entryCount++;
     } else {
          error = true;
     }
}

if(error){
     alert("incorrect,Try agian");
} else {
     alert("Correct Answer✔️");
}
