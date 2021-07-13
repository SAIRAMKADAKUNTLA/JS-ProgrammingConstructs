const read=require("prompt-sync");
const prompt=read();
let number = prompt("Enter a number ");
for(var i=2; i<=number/2; i++){
  if(number % i == 0) 
  console.log("it is not a prime");
  else 
  console.log("it is a prime");
}