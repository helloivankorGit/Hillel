import Cat from './cat.js';
import Dog from './dog.js';
import Hospital from './hospital.js';
import Veterinarian from './veterinarian.js';
import Person from './person.js';

function main() {
    const hospital = new Hospital('Central Hospital');

    const veterinar = new Veterinarian('Dr. Andrey', 'Gorodetskiy', hospital);

    hospital.addPeople(
        new Person('Random', 'Person1'),
        new Person('Random', 'Person2'),
        new Person('Random', 'Person3'),
        new Person('Random', 'Person4'),
        new Person('Random', 'Person5'),
        new Person('Random', 'Person6'),
        new Person('Random', 'Person7')
    )

    let cat1 = new Cat('Shiko', 'pet food', 'Kharkiv');
    let cat2 = new Cat('Tom', 'fish', 'Tbilisi');
    let dog1 = new Dog('Rex', 'meat', 'Kharkiv', 14);
    let dog2 = new Dog('Anna', 'everything', 'Batumi', 32);
    let dog3 = new Dog('Spike', 'pet food', 'Manchester', 12);

    let arr = [cat1, cat2, dog1, dog2, dog3];

    console.group(veterinar.getFullName());

    arr.forEach(item => {
        console.log(veterinar.treatAnimal(item));
    });

    console.groupEnd();

    let arrClinic = hospital.getAnimals().map(item => item[0].nickname);
    console.log(`Animals in the hospital: ${arrClinic}`)
}

main();