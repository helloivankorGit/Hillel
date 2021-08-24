import Cat from './cat.js';
import Dog from './dog.js';
import Hospital from './hospital.js';
import Veterinarian from './veterinarian.js';
import Person from './person.js';

function main() {
    let hospital1 = new Hospital('Central Hospital', 'Jack', 'Victor');
    let veterinar = new Veterinarian('Dr. Andrey', 'Gorodetskiy', 'Central Hospital');
    let cat1 = new Cat('Shiko', 'fish', 'home', true);
    let dog1 = new Dog('Rex', 'meat', 'street', 14);
    let dog2 = new Dog('Anna', 'everything', 'home', 32);
    let person1 = new Person('Olga', 'Buzova');
    let person2 = new Person('Nelly', 'Uvarova');

    console.group(veterinar.getFullName());
    console.log(conclusion.info);
    // console.log(conclusion.info);
    // console.log(conclusion.fullDiagnos);
    // console.groupEnd();
    // console.log('Animals in the hospital: ' + illAnimalNicknames);
    // console.log(hospital1);
    // console.log(veterinar);
    // console.log(cat1);
    // console.log(dog1);
    // console.log(dog2);
    // console.log(person1);
    // console.log(person2);
}


// let student1 = new Student('Bob', 'Marley', 99);
// let student2 = new Student('Alina', 'Malina', 18);

// console.log(student1.getName());
// console.log(student2.getName());

main();