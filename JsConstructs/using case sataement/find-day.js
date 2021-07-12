const read=require("prompt-sync");
const prompt=read();
let number = prompt("Enter a number from 1-7")
let check = parseInt(number);
switch(check)
{    
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;    
    default:
        console.log("Invalid Selection");
}