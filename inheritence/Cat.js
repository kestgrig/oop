import { Pet } from "./Pet.js";


export class Cat extends Pet {
    // copy-paste PET {}
    // constructor(){}
    // intro(){}
    // voice(){}


    constructor(name, bread) {
        super(name, bread);
        this.animalType = 'cat';
        this.sound = 'miau';
        this.emoji = '🐱';
        this.emojiCount = '10';
    }
}