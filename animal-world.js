import { Dog } from "./inheritence/Dog.js"
import { Cat } from "./inheritence/Cat.js"
import { Shark } from "./inheritence/Shark.js";
import { GoldenFish } from "./inheritence/GoldenFish.js";
import { Hamster } from "./inheritence/Hamster.js";
import { Eagle } from "./inheritence/Eagle.js";
import { Parrot } from "./inheritence/Parrot.js";
import { Raven } from "./inheritence/Raven.js";


console.clear();

const rexas = new Dog('Rex', 'aviganis');
console.log(rexas.intro());
console.log(rexas.voice());

const brisius = new Dog('Brisius', 'taksas');
console.log(brisius.intro());
console.log(brisius.voice());

const rainis = new Cat('Rainis', 'bengalu');
console.log(rainis);
console.log(rainis.intro());
console.log(rainis.voice());

const hamster = new Hamster('Kikis');
console.log(hamster);
console.log(hamster.intro());
console.log(hamster.voice());

const tom = new Cat('Tom', 'animacinis');
console.log(tom.intro());
console.log(tom.voice());


const shark = new Shark('Megalodon');
console.log(shark.intro());
console.log(shark.voice());

const goldenFish = new GoldenFish('Nemo');
console.log(goldenFish.intro());
console.log(goldenFish.voice());

const eagle = new Eagle('Onyx');
console.log(eagle.intro());
console.log(eagle.voice());


const parrot = new Parrot('Sam');
console.log(parrot.intro());
console.log(parrot.voice());

const raven = new Raven('Grey');
console.log(raven.intro());
console.log(raven.voice());
