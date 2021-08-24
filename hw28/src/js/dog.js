import Animal from './animal.js';

export default class Dog extends Animal {
    constructor(nickname, food, location, weight) {
        super(nickname, food, location);
        this.weight = weight;
    }
}