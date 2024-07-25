import { Bird } from "./Bird.js";


export class Raven extends Bird {
    constructor(name) {
        super(name);
        this.birdType = 'raven';
        this.sound = 'Karkarkar';
        this.emoji = '🪽';
        this.emojiCount = 6;
    }
}