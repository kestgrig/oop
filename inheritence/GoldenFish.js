import { Fish } from "./Fish.js";

export class GoldenFish extends Fish {
    constructor(name) {
        super(name);
        this.finCount = 10;
        this.animalType = 'golden fish';
        this.sound = 'wish';
        this.emojiCount = 3;
    }

}