
const age = 28;
const doesDrive = false;
//const vari =34;

if(age != 19)
{
    console.log('age is not 19')
}
if(age !== 65){
    //type aur value dono ko check karne ke liye === lgate h
    console.log('age is not 65')
}
else{
    console.log('age is not 19')
}
if(typeof vari !== 'undefined'){
    console.log('vari is defined');
}
else{

    console.log('vari is not defined');
}

//  if(doesDrive && age>18){
//     //&&(and)ka matlab h dono condition true hona chahiye
//     console.log('you can drive');
// }
// else{
//     console.log('you can not drive');

// } 

if(doesDrive || age>18){
    //(||-aur)ka matlab h dono condition m se koi ek true hona chahiye true hona chahiye
    console.log('you can drive');
}
else{
    console.log('you can not drive');

}
console.log(age==45? 'age is 45': 'age is not 45')
//ye(age==45?)ternary operator h

switch (age) {
    case 18:
        console.log("you are 18");
        break;

        case 28:
            console.log("you are 28");
            break;

            case 38:
                console.log("you are 38");
                break;
            
    default:
        
        console.log("you are unknown age");
        break;

    
}