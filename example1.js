var message = "Hello World: this is statement";

// console.log(message + " " + 1);
// console.log(message + " " + 2);
// console.log(message + " " + 3);
// console.log(message + " " + 4);
// console.log(message + " " + 5);
// console.log(message + " " + 6);
// console.log(message + " " + 7);
// console.log(message + " " + 8);
// console.log(message + " " + 9);

// var num = 99;

//Demonstrate how to use a loop
// while(num <= 100){
//     console.log(message + " " + num);
//     num++;
// }

//Learing the while loop
// while(num > 0) {
//     console.log(num + " bottles of beer on the wall, " + num + " bottles of beer. Take one down and pass it around, " + (num -1) + " bottles of beer on the wall.");
//     num--;
// }

for(var num = 99; num > 0; num--){
    console.log(num + " bottles of beer on the wall, " + num + " bottles of beer. Take one down and pass it around, ");
    if((num - 1) != 0){
    console.log((num -1) + " bottles of beer on the wall.");
    } else {
        console.log("no more bottles of beer on the wall.")
    }
    console.log("")
}
