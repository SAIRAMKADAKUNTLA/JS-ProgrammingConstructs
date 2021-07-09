let maxvalue = 0;
let minvalue = 1000;
for(i=1;i<=5;i++){
    let number=Math.floor(Math.random() * 999);
    console.log(number);
    if(maxvalue < number) maxvalue=number;
    if(minvalue > number) minvalue=number;
}
console.log("maximum value="+maxvalue);
console.log("minimum value="+minvalue)