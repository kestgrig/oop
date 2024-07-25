export class Pet {
    constructor(name, bread) {
        this.name = name;
        this.legsCount = 4;
        this.bread = bread;
        this.animalType = '';
        this.sound = '';
        this.emoji = '';
        this.emojiCount = 10;
    }

    intro() {
        return `Hello, I am a ${this.animalType} and my name is ${this.name}!`;
    }

    voice() {
        return `${this.name}: ${this.sound}!! ${this.emoji.repeat(this.emojiCount)} - ${this.bread}.`;

    }
}