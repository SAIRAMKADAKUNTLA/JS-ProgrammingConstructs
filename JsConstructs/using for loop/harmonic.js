const read=require("prompt-sync");
const prompt=read();
let number = prompt("Enter a number you like to get harmonic series")
let add=0;
for(var i=1; i<=number; i++){
 add=add+(1/i)
}
console.log("H"+number+"="+add);