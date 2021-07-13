const read=require("prompt-sync");
const prompt=read();
let number = prompt("Enter a number you like to find harmonic");
for(var i=1; i<=number; i++){
    var result=result + 1/i;
    console.log("Hn="+result);
}