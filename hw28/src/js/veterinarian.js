import Person from './person.js';

export default class Veterinarian extends Person {
    #diagnosis = { 
        ill: 'ill', 
        healthy: 'healthy' 
    }

    constructor(firstName, lastName, hospital) {
        super(firstName, lastName);
        this.hospital = hospital;
    }

    getFullName() {
        return `${super.getFullName()} (${this.hospital})`;
    }

    _setDiagnosis(userMessage) {
        return {
            diagnosis: this.#diagnosis,
            info: userMessage
         };
    }
}