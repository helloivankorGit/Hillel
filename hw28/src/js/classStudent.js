import students from './students.js';

function id() {
    let id = 0;
    return function () {
        return ++id;
    }
}

let studentId = id();

class Student {
    constructor({name, surname, ratingPoint, schoolPoint, isSelfPayment = true}) {
        this.name = name;
        this.surname = surname;
        this.ratingPoint = ratingPoint;
        this.schoolPoint = schoolPoint;
        this.isSelfPayment = isSelfPayment;
        this.id = studentId();
    }
}

class University {

    constructor(name) {
        this.arrStudents = [];
        this.name = name;
    }

    addStudent(student) {
        this.arrStudents.push(student);
        this.arrStudents.sort((a, b) => (b.ratingPoint + b.schoolPoint) - (a.ratingPoint + a.schoolPoint));
        if(student.ratingPoint >= 800 && (this.arrStudents.length <= 5)){
            student.isSelfPayment = false; 
        }
    }

    getEnrolledStudents() {
        return this.arrStudents;
    }

    getStudentsOnBudget() {
        return this.arrStudents.filter(item => !item.isSelfPayment);
    }
}

let university = new University ('Stamford');
students.map(student => {
    university.addStudent(new Student(student));
});


console.log('Students who were enrolled in the university', university.getEnrolledStudents());
console.log('Students who are enrolled on a budget', university.getStudentsOnBudget());
