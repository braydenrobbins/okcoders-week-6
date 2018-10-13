function makeMessage(test){
     if(test){
        console.log("I called a function");
     } else {
         console.log("I called a function differently");
     }
    }

    makeMessage(true);
    makeMessage(false);
    makeMessage(true);
    makeMessage(false);
    makeMessage(true);


    //Loops inside of loops
// for(var num1 = 1; num1 < 20; num1++){
//     message = ""
//     for(var num2 = 1; num2 <= num1; num2++){
//         message = message + num2 + " ";
//     }
//     console.log(message);
// }