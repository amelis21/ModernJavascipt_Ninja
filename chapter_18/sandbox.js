const double = (...nums) => {
    // do something
    console.log(nums);
    return nums.map( num => num * 2);
}

// const result = double(1, 3, 5, 9, 2, 4, 6, 8);
// console.log(result);

// const people = ['shaun', 'ryu', 'crystal'];
// console.log(...people);
// const members = ['chun-li', 'yoshi', ...people];
// console.log(members);
const namesArray = ['ryo','chun-li','ryo','shaun' ];
console.log(namesArray);
// const nameSet = new Set(namesArray);
// console.log(nameSet);
// const uniqueNames = [...nameSet];
// console.log(uniqueNames);
const uniqueNames = [...new Set(namesArray)];
console.log(uniqueNames);

const ages = new Set();
ages.add(20);
ages.add(19);
ages.add(29);
ages.add(40);
console.log(ages, ages.size);
console.log(ages.has(30), ages.has(20));
ages.clear();
 
console.log(ages);

const ninjas = new Set([
    {name: 'shaun', age: 30},
    {name: 'crystal', age: 29},
    {name: 'shun-li', age: 32}
]);
ninjas.forEach( ninja => {
    console.log(ninja.name, ninja.age);
});

const symbolOne = Symbol('a generic name');
const symbolTwo = Symbol('a generic name');
console.log(symbolOne,  typeof symbolOne,symbolTwo);
console.log(symbolOne === symbolTwo);
const ninja = {};

ninja.age = 30;
ninja['belt'] = 'orange';
ninja['belt'] = 'black';
console.log(ninja);

ninja[symbolOne] = 'ryu';
ninja[symbolTwo] = 'shaun';
console.log(ninja);
