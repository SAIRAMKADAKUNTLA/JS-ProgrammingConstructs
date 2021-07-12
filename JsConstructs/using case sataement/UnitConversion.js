const read=require("prompt-sync");
const prompt=read();
let number=prompt("enter the number 1)feet to inch,2)inch to feet,3)feet to meter,4)meter to feet");
let check=parseInt(number);
switch(check){
    case 1:
        let value1=prompt("enter value in feets");
        let result1=value1 * 12;
        console.log(+value1+"feets=="+result1+"inches");
        break;
        case 2:
            let value2=prompt("enter value in inches");
            let result2=value2 / 12;
            console.log(+value2+"inches=="+result2+"feets");
            break;
            case 3:
                let value3=prompt("enter value in feets");
                let result3=value3*0.3048;
                console.log(+value3+"feets=="+result3+"meters");
                break;
                case 4:
                    let value4=prompt("enter value in meters");
                    let result4=value4/0.3048;
                    console.log(+value4+"meters=="+result4+"feets");
                    break;
                    default:
                        console.log("invalid selection");
                        break;




}