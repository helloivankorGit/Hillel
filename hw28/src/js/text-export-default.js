export default class Student {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    getName() {
        return this.firstName + ' ' + this.lastName;
    }

    getAge() {
        return 'age: ' + this.age;
    }
}