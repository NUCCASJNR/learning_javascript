#!/usr/bin/node

class Student {
    constructor(name, age, color) {
        this.name = name;
        this.age = age;
        this.color = color;
    }

    getstudentName() {
        console.log(`student name is ${this.name} and age is ${this.age} and color is ${this.color}`);

    }
}

const student1 = new Student('Al-Areef', 16, 'Black');
const student2 = new Student('sideeq', 27, 'Blue');
const student3 = new Student('Alli', 28, 'Green');
// console.log(student1.getStudentName())
student1.getstudentName();
student2.getstudentName();
student3.getstudentName();
