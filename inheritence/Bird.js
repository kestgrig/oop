export class Bird {
    constructor(name) {
        this.name = name;
        this.legsCount = 2;
        this.wings = 2;
        this.birdType = '';
        this.sound = '';
        this.emoji = '';
        this.emojiCount = 12;
    }

    intro() {
        return `It is ${this.birdType} and its name is ${this.name}! ${this.name} have ${this.wings} wings and ${this.legsCount} legs.`;
    }

    voice() {
        return `${this.name}: ${this.sound}!! ${this.emoji.repeat(this.emojiCount)}.`;

    }
}