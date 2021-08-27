export default class Hospital {
    #illAnimals = [];
    #findingPetsPeople = [];
    
    constructor(name) {
        this.name = name;
    }

    getAnimals() {
        return this.#illAnimals;
    }

    getFindingPetsPeople() {
        return this.#findingPetsPeople;
    }

    addAnimal(...pet) {
        this.#illAnimals.push(pet);
    }

    addPeople(...customers) {
        this.#findingPetsPeople = [...this.#findingPetsPeople, ...customers];
    }

    findHome(animal) {
        if (this.#illAnimals.find(item => item.nickname === animal.nickname)) {
            return {
                status: 'restricted',
                message: `We need to heal ${animal.nickname} firstly`
            }
        } else {
            let itemToRemove = this.#findingPetsPeople.splice((Math.floor(Math.random() * this.#findingPetsPeople.length)), 1)[0].getFullName();

            return {
                status: 'success',
                name: itemToRemove
            }
        }
    }
}