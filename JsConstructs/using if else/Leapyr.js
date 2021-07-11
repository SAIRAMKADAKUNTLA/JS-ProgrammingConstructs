const read=require("prompt-sync");
const prompt=read();
console.log("enter any year in numbers");
let year=prompt("enter year")
if((year%4 == 0)&&(year%100 != 0)){
    console.log("True")
}
else{
    console.log("False")
}