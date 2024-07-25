import { Bird } from "./Bird.js";


export class Parrot extends Bird {
    constructor(name) {
        super(name);
        this.birdType = 'parrot';
        this.sound = 'Duok pinigu';
        this.emoji = '🦜';
        this.emojiCount = 20;
    }
}