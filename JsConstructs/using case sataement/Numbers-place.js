const read=require("prompt-sync");
const prompt=read();
let number = prompt("Enter a number from like 1,10,100,1000,10000")
let check=parseInt(number)
switch(check){
case 1:
    console.log("ones");
    break;
    case 10:
        console.log("tens");
        break;
        case 100:
            console.log("hundreds");
            break;
            case 1000:
            console.log("thousands");
            break;
            case 10000:
                console.log("ten thousand");
                break;
                default:
                    console.log("invalid result");
                    break;
}