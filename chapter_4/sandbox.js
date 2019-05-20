// function greet(){
//     console.log('Hello there');
// }

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


// const calcArea = radius =>  3.14 * radius**2;
// console.log(calcArea(2));

// const myFunc = callbackFunc => {
//     let value = 30;
//     callbackFunc(value);
// }

// myFunc(value => {
//     console.log(value);
// });

const people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];
const ul = document.querySelector(".people");

const logPerson = (person, index) =>{
    console.log(index, person);
}
let html = ``;

// people.forEach(logPerson);
people.forEach(function(person){
    html+=`<li style="color: purple">${person}</li>`;
});


console.log(html);
ul.innerHTML = html;