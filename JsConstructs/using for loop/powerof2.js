const read=require("prompt-sync");
const prompt=read();
let number = prompt("Enter a number you like to take power of 2 is")
for(var i=1; i<=number; i++){
        
    var power = Math.pow(2,i);
    console.log("2^"+i+"="+power);
}