import { Bird } from "./Bird.js";


export class Eagle extends Bird {
    constructor(name) {
        super(name);
        this.birdType = 'Eagle';
        this.sound = 'Rahhh';
        this.emoji = '🦅';
        this.emojiCount = 5;
    }
}