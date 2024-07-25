import { Pet } from "./Pet.js";

export class Hamster extends Pet {
    constructor(name) {
        super(name);
        this.bread = 'naminis';
        this.animalType = 'hamster';
        this.sound = 'cyp cyp';
        this.emoji = '🐁';
        this.emojiCount = 8;
    }
}