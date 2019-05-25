// const scores = [10, 20, 15, 30, 25, 50, 40, 5];

// // non destructive - doesnt change the array
// const filteredScores = scores.filter(score => {
//     return score > 20;
// })

// console.log(filteredScores);

// const users = [
//     {name: 'shaun', premium: true},
//     {name: 'yoshi', premium: false},
//     {name: 'mario', premium: false},
//     {name: 'chun-li', premium: true}
// ];

// const premiumUsers = users.filter(user => {
//     return user.premium;
// })

// console.log(premiumUsers);

// const prices = [20, 10, 30, 25, 15, 40, 80, 5];

// const salePrices = prices.map(price => price / 2);
// console.log(salePrices);

const products = [
    {name: 'gold star', price: 20},
    {name: 'mushroom', price: 40},
    {name: 'green shells', price: 30},
    {name: 'banana skin', price: 10},
    {name: 'red shells', price: 50}
]

// const saleProducts = products.map( product => {
//     if(product.price > 30){
//         return {name: product.name, price: product.price / 2}
//     } else {
//         return product;
//     }
// })
// console.log(saleProducts);

// const scores = [10, 20, 60, 40, 70, 90, 30];

// const result = scores.reduce((acc, curr) => {
//     if (curr > 50){
//         acc ++;
//     }
//     return acc;
// }, 0);
// console.log(result);

// const scores = [
//     {player: 'mario', score: 50},
//     {player: 'yoshi', score: 30},
//     {player: 'mario', score: 70},
//     {player: 'crystal', score: 60},
//     {player: 'mario', score: 50},
//     {player: 'yoshi', score: 30},
//     {player: 'mario', score: 70}
// ];

// const marioTotal = scores.reduce((acc, curr) => {
//     if (curr.player === 'mario'){
//         acc+= curr.score;
//     }
//     return acc;
// }, 0);
// console.log(marioTotal);

// const scores = [10, 5, 0, 40, 60, 10, 20, 70];
// find the first score that is over 50 - returns the value of the first element inside the array
// that passes the first test in a callback function
// const firstHighScore = scores.find((score) => {
//     return score > 50;
// });
// console.log(firstHighScore);

// const names = ['mario', 'shaun', 'chun-li', 'yoshi', 'luigu'];
// const scores = [10, 50, 20, 5, 35, 70, 45];

// names.sort();
// names.reverse();
// console.log(names);
// scores.sort();
// console.log(scores);
// scores.reverse();
// console.log(scores);

// const players = [
//     {name: 'mario', score: 20},
//     {name: 'luigi', score: 10},
//     {name: 'yoshi', score: 50},
//     {name: 'shaun', score: 70}
// ]

// players.sort((a, b) => {
//     if (a.score > b.score){
//         return -1;
//     } else if (b.score > a.score){
//         return 1;
//     } else {
//         return 0;
//     }
// });

// players.sort((a, b) => b.score - a.score);
// console.log(players);

// scores.sort((a, b) => b-a);
// console.log(scores);


// const filtered = products.filter( product => product.price > 20);
// const promos = filtered.map(product => {
//     return `the ${product.name} is ${product.price / 2} pounds`;
// });
const promos = products
    .filter(p => p.price > 20)
    .map(p => `the ${p.name} is ${p.price/2}`);

console.log(promos);