import { Dog } from "./js/Dog.js";

const rexas = new Dog('Rexas', 'black', 3);
console.log(rexas);
console.log(rexas.name);
console.log(rexas.furColor);
console.log(rexas.age);

// const brisius = new Dog('Brisius', 'brown', 2);
// console.log(brisius);
// console.log(brisius.name);
// console.log(brisius.furColor);
// console.log(brisius.age);

// const lape = {
//     name: 'Snape',
// };

console.log(rexas.hi());

console.log(rexas.think());

console.log(rexas.addNumbers(10, 5));
console.log(rexas.addNumbers(10, -5));
console.log(rexas.addNumbers(1, -5));
console.log(rexas.manyBones(10));
console.log(rexas.addNumbers(-10, 10));

console.clear();

const brisius = new Dog('Brisius', 'brown', 7);
console.log(brisius);

console.log(brisius.lostLeg());
console.log(brisius.lostLeg());
console.log(brisius.lostLeg());
console.log(brisius.lostLeg());
console.log(brisius.lostLeg());

console.log(brisius.birthday());
console.log(brisius.birthday());