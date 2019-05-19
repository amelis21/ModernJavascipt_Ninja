function greet(){
    console.log('Hello there');
}

// greet();
// greet();
// greet();


// const speak = function(name = "thanos", time="night"){
//     console.log(`good ${time} ${name}`);
// }
// speak("Thanos", "day");

// const calcArea = function(radius){
//     return 3.14 * radius **2;
// }

// const area = calcArea(2) === 12.56;
// console.log(area);


const calcArea = radius =>  3.14 * radius**2;
console.log(calcArea(2));