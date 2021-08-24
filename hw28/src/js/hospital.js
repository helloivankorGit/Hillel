export default class Hospital {
    #illAnimals = [];
    #findingPetsPeople = [];
    
    constructor(name, illAnimals, findingPetsPeople) {
        this.name = name;
        this.#illAnimals = illAnimals;
        this.#findingPetsPeople = findingPetsPeople;
    }

    getAnimals() {
        return this.#illAnimals;
    }

    getFindingPetsPeople() {
        return this.#findingPetsPeople;
    }

    addAnimal(petName) {
        illAnimals.push(petName);
    }

    addPeople(customers, oneCustomer) {
        findingPetsPeople.push(...customers, oneCustomer);
    }

    findHome(illPetName) {
        if(illAnimals.includes(illPetName)) {
            return {
                status: restricted,
                message: `We need to heal ${illPetName} firstly`
            }
        } else {
            let itemToRemove = findingPetsPeople[Math.floor(Math.random() * findingPetsPeople.length)]
            filteredPeople = findingPetsPeople.filter(item => item !== itemToRemove);
            return {
                status: success,
                name: `${firstName} ${lastName}`
            }
        }
    }
}